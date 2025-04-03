import ClassSignature = Classes.ClassSignature;
import MethodSignature = Classes.MethodSignature;
import PropertySignature = Classes.PropertySignature;
import ConstructorSignature = Classes.ConstructorSignature;

export async function classParser(filePath: string): Promise<string> {
    try {
        const content: string = "";

        const classRegex = /class\s+(\w+)\s*{([^}]*)}/g;
        const methodRegex = /(\w+)\s*\(([^)]*)\)\s*:\s*([^;]*)/g;
        const propertyRegex = /(\w+)\s*:\s*([^;]*)/g;
        const constructorRegex = /constructor\s*\(([^)]*)\)\s*:\s*([^;]*)/g;

        let classData: ClassSignature;
        let methodData: MethodSignature;
        let propoertyData: PropertySignature;
        let constructorData: ConstructorSignature;

        return content;
    } catch (error: any) {
        console.error("Error parsing class:", error);
        return error as string;
    }
}