import fs from 'fs';
import path from 'path';
import type { DocBlock } from './types.ts';

export async function generateContent(docs: DocBlock[], outputDir: string): Promise<void> {
  try {
    // Ensure output directory exists
    fs.mkdirSync(outputDir, {recursive: true});

    // Create API directory
    const apiDir = path.join(outputDir, 'api');
    fs.mkdirSync(apiDir, {recursive: true});

    if (docs.length === 0) {
      console.log("No documented items found. Check your JSDoc comments format.");

      // Create a minimal index file
      const indexContent = `# API Documentation

No documented items were found in this codebase. Make sure your functions have JSDoc comments.

Example of a properly documented function:

\`\`\`typescript
/**
 * This is a description of what the function does
 * @param {string} name - Description of the parameter
 * @returns {boolean} Description of the return value
 * @example
 * const result = myFunction('test');
 * console.log(result); // true
 */
function myFunction(name) {
  return true;
}
\`\`\`
`;
      fs.writeFileSync(path.join(outputDir, 'index.md'), indexContent);
      return;
    }

    // Group docs by first letter for alphabetical navigation
    const alphabetical = docs.reduce((acc, doc) => {
      const firstLetter = doc.name[0].toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(doc);
      return acc;
    }, {} as Record<string, DocBlock[]>);

    // Generate index page
    const indexContent = `# API Documentation

${docs.length} functions and classes documented from this codebase.

## Functions by first letter

${Object.keys(alphabetical).sort().map(letter =>
        `### ${letter}

${alphabetical[letter].map((doc: { name: any; description: string; }) =>
            `- [${doc.name}](./api/${doc.name}.md)${doc.description ? ` - ${doc.description.split('.')[0]}.` : ''}`
        ).join('\n')}`
    ).join('\n\n')}

## Implementation Files

${Array.from(new Set(docs.map(doc => doc.filePath))).filter(Boolean).sort().map(filePath =>
        `- \`${filePath}\``
    ).join('\n')}
`;

    fs.writeFileSync(path.join(outputDir, 'index.md'), indexContent);

    // Generate individual doc files
    for (const doc of docs) {
      const content = `# ${doc.name}

${doc.filePath ? `*Defined in [\`${doc.filePath}\`](../..${doc.filePath?.startsWith('/') ? '' : '/'}${doc.filePath})*` : ''}

${doc.description || 'No description provided.'}

${doc.deprecated?.used ? `This function is considered deprecated and no longer used. See below for details:\n ${doc.deprecated.description ? doc.deprecated.description : ''}` : ''}
${doc.params && doc.params.length > 0 ? `## Parameters

${doc.params.map((param: { name: any; type: any; description: any; }) => `- \`${param.name}\` (${param.type}): ${param.description || 'No description provided.'}`).join('\n')}
` : ''}

${doc.returns ? `## Returns

(${doc.returns.type}): ${doc.returns.description || 'No description provided.'}
` : ''}

${
          doc.throws ? `## Throws
          ${doc.throws.map((param: { name: any; type: any; description: any; }) => `- \`${param.name}\` (${param.type}): ${param.description || 'No description provided.'}`).join('\n')}
          )
          ` : ''
      }

${doc.example ? `## Example

\`\`\`typescript
${doc.example}
\`\`\`
` : ''}
`;

      // Specific folder directory
      const specDir = path.join(apiDir, doc.filePath);
      fs.mkdirSync(specDir, { recursive: true });
      fs.writeFileSync(path.join(specDir, `${doc.name}.md`), content);
    }

    console.log(`Generated documentation for ${docs.length} items in ${outputDir}`);
  } catch (error) {
    console.error('Error generating documentation:', error);
    throw error;
  }
}