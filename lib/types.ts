export interface FunctionSignature {
    name: string;
    parameters: Array<{name: string, type: string}>;
    returnType: string;
}

export interface Properties {
    name: string;
    type: string;
    description?: string;
}

export interface ConstSignature {
    name: string;
    description?: string;
    type: string;
}

export interface EnumSignature {
    name: string;
    description?: string;
    values: Array<{name: string, value: string}>;
}

export interface ClassSignature {
    name: string;
    properties: Array<Properties>;
    methods: Array<FunctionSignature>;
}

export const enum MDType {
    PAGE,
    MODULE,
    CLASS,
    INTERFACE,
    ENUM,
    TYPE,
    FUNCTION,
    CONST
}

export interface JSDocBlock {
    params?: Array<{name: string, type: string, description: string}>;
    returns?: {type: string, description: string};
    throws?: Array<{name: string, type: string, description: string}>;
    deprecated?: {used: boolean, description: string};
    example?: string;
}

export interface DocBlock extends JSDocBlock {
    name: string;
    description: string;
    filePath: string;
};