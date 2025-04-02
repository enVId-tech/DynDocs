namespace Variables {
    import DocBlock = Docs.DocBlock;

    export interface VariableSignature {
        data: DocBlock;

        value: string | number | boolean | null | undefined | any;
        isConst: boolean;
        isExported: boolean;
    }

    export interface Constants extends VariableSignature {
        data: DocBlock;

        value: string;
    }

    export interface MethodInfo {
        data: DocBlock;

        value: string;
    }

    export interface VariableDoc extends VariableSignature {
        data: DocBlock;

        value: string;
    }
}

namespace Enums {
    import DocBlock = Docs.DocBlock;

    export interface EnumSignature {
        data: DocBlock;

        members: Map<string, EnumMemberInfo>;
        isConst: boolean;
        isExported: boolean;
    }

    export interface EnumMemberInfo {
        data: DocBlock;

        value?: string | number;
        description?: string;
    }

    export interface EnumDoc {
        data: DocBlock;
        enum: EnumSignature;
    }
}