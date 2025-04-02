namespace Functions {
    import DocBlock = Docs.DocBlock;

    export interface FunctionSignature {
        name: string;
        parameters: Array<{ name: string, type: string }>;
        returnType: string;
    }

    export interface FunctionDoc {
        function: FunctionSignature;
        doc: DocBlock;
    }
}