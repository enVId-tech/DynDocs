import fs from "fs";
import path from "path";

/**
 * General library file to generate readme files
 * @param {string} filePath The absolute path to the file to be generated
 * @param content The README content to be included
 * @param docName The name of the file to be generated
 */
export async function generateFile(filePath: string, content: string, docName: string) {
    fs.mkdirSync(filePath, { recursive: true });
    fs.writeFileSync(path.join(filePath, `${docName}.md`), content);
}