import TypeDoc = Types.TypeDoc;

export async function typesParser(content: string): Promise<string> {
    try {
        const typeRegex = /type\s+(\w+)\s*=\s*(.*?);/g;
        let types: TypeDoc;
        let match;
    } catch (error: any) {
        console.error("Error parsing types:", error);
        return error as string;
    }
}