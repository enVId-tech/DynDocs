import fs from "fs";
import path from "path";

/**
 * General library file to generate readme files
 * @param filePath
 * @param content
 * @param docName
 */
export async function generateFile(filePath: string, content: string, docName: string) {
    fs.mkdirSync(filePath, { recursive: true });
    fs.writeFileSync(path.join(filePath, `${docName}.md`), content);
}