import VariableDoc = Variables.VariableDoc;

export async function variableParser(filePath: string): Promise<string> {
    try {
        const content: string = "";

        const variableRegex = /const\s+(\w+)\s*=\s*(.*?);/g;
        let variableTypes: VariableDoc;
        return content;
    } catch (error: any) {
        console.error("Error parsing variable:", error);
        return error as string;
    }
}