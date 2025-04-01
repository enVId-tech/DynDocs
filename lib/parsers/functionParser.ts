import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import type {DocBlock} from "@/lib/types.ts";

export async function parseCodebase(repoPath: string): Promise<DocBlock[]> {
  try {
    const docs: DocBlock[] = [];
    const files = await glob('**/*.{js,jsx,ts,tsx}', {
      cwd: repoPath,
      ignore: ['node_modules/**', '.next/**', 'out/**', '.git/**', 'docs/**']
    });

    console.log(`Found ${files.length} files to scan for documentation`);

    for (const file of files) {
      const filePath = path.join(repoPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const relativePath = path.relative(repoPath, filePath);

      // More comprehensive regex to match various function declarations with JSDoc
      // This will catch function declarations, arrow functions, class methods, etc.
      const docBlockRegex = /\/\*\*\s*([\s\S]*?)\s*\*\/\s*(?:export\s+)?(?:default\s+)?(?:async\s+)?(?:function\s+(\w+)|class\s+(\w+)|(?:const|let|var)\s+(\w+)\s*=\s*(?:async\s+)?(?:\(.*?\)|function\s*\(.*?\)))/g;

      let match;
      while ((match = docBlockRegex.exec(content)) !== null) {
        const [, commentBlock, funcName, className, varName] = match;
        const name = funcName || className || varName;

        if (!name) continue;

        console.log(`Found documented item: ${name} in ${relativePath}`);

        // Clean up the description
        let description = "";
        const descriptionMatch = commentBlock.match(/^\s*\*?\s*([^@].*?)(?=\s*\*\s*@|\s*$)/s);
        if (descriptionMatch) {
          description = descriptionMatch[1].replace(/\s*\*\s?/g, ' ').trim();
        }

        // Extract params
        const paramRegex = /@param\s+(?:{([^}]+)})?\s*(\w+)(?:\s+-\s*|\s+)?(.*?)(?=\s*\*\s*@|\s*\*\/|$)/gs;
        const params = [];
        let paramMatch;

        while ((paramMatch = paramRegex.exec(commentBlock)) !== null) {
          const [, type = 'any', paramName, paramDesc = ''] = paramMatch;
          params.push({
            name: paramName,
            type: type || 'any',
            description: paramDesc.replace(/\s*\*\s?/g, ' ').trim()
          });
        }

        // Extract return type and description
        const returnMatch = commentBlock.match(/@returns?\s+(?:{([^}]+)})?\s*(.*?)(?=\s*\*\s*@|\s*\*\/|$)/s);
        let returns = undefined;

        if (returnMatch) {
          returns = {
            type: returnMatch[1] || 'any',
            description: (returnMatch[2] || '').replace(/\s*\*\s?/g, ' ').trim()
          };
        }

        // Extract example
        const exampleMatch = commentBlock.match(/@example\s+([\s\S]*?)(?=\s*\*\s*@|\s*\*\/|$)/s);
        let example = undefined;

        if (exampleMatch) {
          example = exampleMatch[1].replace(/^\s*\*\s?/gm, '').trim();
        }

        // Extract throws information
        const throwsRegex = /@throws?\s+(?:{([^}]+)})?\s*(.*?)(?=\s*\*\s*@|\s*\*\/|$)/gs;
        const throws = [];
        let throwsMatch;

        while ((throwsMatch = throwsRegex.exec(commentBlock)) !== null) {
          const [, type = 'Error', throwsDesc = ''] = throwsMatch;
          throws.push({
            name: type.split('|')[0].trim(), // Use the first type as the name
            type: type || 'Error',
            description: throwsDesc.replace(/\s*\*\s?/g, ' ').trim()
          });
        }

        // Extract deprecated information
        const deprecatedRegex = /@deprecated\s+(.*?)(?=\s*\*\s*@|\s*\*\/|$)/s;
        const deprecatedMatch = commentBlock.match(deprecatedRegex);
        let deprecated = undefined;

        if (deprecatedMatch) {
          deprecated = {
            used: true,
            description: deprecatedMatch[1].replace(/\s*\*\s?/g, ' ').trim()
          };
        }

        docs.push({
          name,
          description,
          params: params.length > 0 ? params : undefined,
          throws: throws.length > 0 ? throws : undefined,
          deprecated: deprecated,
          returns,
          example,
          filePath: relativePath
        });
      }
    }

    console.log(`Found ${docs.length} documented items in total`);
    return docs;
  } catch (error) {
    console.error('Error parsing codebase:', error);
    throw error;
  }
}