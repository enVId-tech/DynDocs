import { parseCodebase } from '../lib/parser.ts';
import { generateContent } from '../lib/generator.ts';

async function main() {
  // The GitHub workspace is provided by the GitHub Actions environment
  const repoPath = process.env.GITHUB_WORKSPACE || process.cwd();
  const outputDir = process.env.OUTPUT_DIR || 'docs';

  console.log(`Parsing codebase at: ${repoPath}`);
  const docs = await parseCodebase(repoPath);
  console.log(`Found ${docs.length} documented items`);

  console.log(`Generating documentation in: ${outputDir}`);
  await generateContent(docs, outputDir);
  console.log('Documentation generated successfully');
}

main().catch(error => {
  console.error('Error generating documentation:', error);
  process.exit(1);
});