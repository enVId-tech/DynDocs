import {DocPage} from "@/lib/class";
import {glob} from "glob";
import path from "path";
import * as os from "node:os";

export async function generatePage(sourcePath: string = "/") {
    try {
        const docPage: DocPage = new DocPage();

        // Find files while ignoring common directories/files
        await generatePageLinks(sourcePath, docPage);
    } catch (error) {
        console.error("Error generating page:", error);
    }
}

export async function generatePageLinks(rootDir: string = "./", docPage: DocPage): Promise<void> {
    try {
        // Find files while ignoring common directories/files
        const files: string[] = await glob("**/*.{js,ts,jsx,tsx}", {
            cwd: rootDir,
            ignore: [
                "**/node_modules/**",
                "**/.git/**",
                "**/.next/**",
                "**/dist/**",
                "**/build/**",
                "**/*.test.*",
                "**/*.spec.*"
            ],
            absolute: false
        });

        files.forEach((file: string, index: number) => {
            if (os.type() === "Windows_NT") {
                const windowsPath: string = `${file.split("\\").join("/")}`;
                console.log(windowsPath);

                files[index] = windowsPath;
            } else {
                files[index] = file;
            }
        })

        console.log("Logging files and directories");
        console.log(files);

        /**
         * Later on, you can split the string using the / character,
         * and then split the last element using the . character
         * and then getting the last instance within the string you
         * just split. That way, you can get the file extension
         */

        docPage.path = rootDir;
        docPage.fileName = path.basename(rootDir);
    } catch (error) {
        console.error("Error generating page links:", error);
    }
}

