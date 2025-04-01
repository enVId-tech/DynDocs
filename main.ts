import {generatePage} from "@/lib/generator/pageGenerator";

function main(): void {
    generatePage("./").then((result) => {console.log(result)});
}

main();