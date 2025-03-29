import { parseCodebase } from '@/lib/parser';
import { generateDocs } from '@/lib/generator';
import path from 'path';

async function main() {
  console.log('Testing documentation generation...');
  const repoPath = process.cwd();
  const outputDir = path.join(repoPath, 'docs');

  console.log(`Parsing codebase at: ${repoPath}`);
  const docs = await parseCodebase(repoPath);

  console.log(`Found ${docs.length} documented items`);
  console.log('Generating documentation...');

  await generateDocs(docs, outputDir);

  console.log(`Documentation generated successfully in ${outputDir}`);
  console.log('You can now view it by running your Next.js app and navigating to /api');
}

main().catch(error => {
  console.error('Error generating documentation:', error);
  process.exit(1);
});