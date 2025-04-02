namespace Classes {
    import DocBlock = DocsBlock.DocBlock;

    export interface MethodSignature {
        documentation: DocBlock;
        accessor?: MethodAccessor;
    }

    export interface PropertySignature {
        documentation: DocBlock;
    }

    export interface ConstructorSignature {
        name: string;
        description?: string;
        parameters: Array<{ name: string, type: string }>;
        returnType: string;
    }

    export enum MethodAccessor {
        getter,
        setter,
    }
}

export class Method {}