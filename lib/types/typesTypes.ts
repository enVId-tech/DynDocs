namespace Types {
    import DocBlock = Docs.DocBlock;

    export interface TypeSignature {
        name: string;
        properties: Map<string, PropertyInfo>;
        extends?: string[];
        typeParameters?: string[];
    }

    export interface PropertyInfo {
        type: string;
        optional: boolean;
        description?: string;
    }

    export interface TypeDoc {
        type: TypeSignature;
        doc: DocBlock;
    }
}

namespace Interfaces {
    import TypeSignature = Types.TypeSignature;
    import DocBlock = Docs.DocBlock;

    export interface InterfaceSignature extends TypeSignature {
        methods?: Map<string, MethodInfo>;
    }

    export interface MethodInfo {
        parameters: Array<{ name: string, type: string }>;
        returnType: string;
        description?: string;
    }

    export interface InterfaceDoc {
        interface: InterfaceSignature;
        doc: DocBlock;
    }
}