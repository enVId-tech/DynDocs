import {DocPage} from "@/lib/class";
import {glob} from "glob";
import path from "path";
import {generate} from "astring";

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
        const files = await glob("**/*.{js,ts,jsx,tsx}", {
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
            absolute: true
        });

        console.log("Logging files and directories");
        console.log(files);

        docPage.path = rootDir;
        docPage.fileName = path.basename(rootDir);
    } catch (error) {
        console.error("Error generating page links:", error);
    }
}

