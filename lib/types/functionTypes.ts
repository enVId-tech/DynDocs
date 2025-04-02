namespace Functions {
    export interface FunctionSignature {
        name: string;
        parameters: Array<{ name: string, type: string }>;
        returnType: string;
    }

    export interface FunctionDoc {
        function: FunctionSignature;
        doc: DocsBlock.DocBlock;
    }
}