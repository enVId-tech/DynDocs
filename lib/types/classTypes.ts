export interface MethodSignature {
    name: string;
    description?: string;
    parameters: Array<{name: string, type: string}>;
    returnType: string;
}