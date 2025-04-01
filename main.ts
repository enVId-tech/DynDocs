import {generatePage} from "@/lib/generators/pageGenerator.ts";

/**
 * Main input function of code
 * @returns void
 */
function main(): void {
    generatePage("./").then((result) => {console.log(result)});
}

main();