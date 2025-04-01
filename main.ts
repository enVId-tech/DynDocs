import {generatePage} from "./lib/generator/pageGenerator.ts";

/**
 * Main input function of code
 * @returns void
 */
function main(): void {
    generatePage("./").then((result) => {console.log(result)});
}

main();