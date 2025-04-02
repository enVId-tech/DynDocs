namespace DocsBlock {
    export interface JSDocBlock {
        params?: Array<{ name: string, type: string, description: string }>;
        returns?: { type: string, description: string };
        throws?: Array<{ name: string, type: string, description: string }>;
        deprecated?: { used: boolean, description: string };
        example?: string;
    }

    export interface DocBlock extends JSDocBlock {
        name: string;
        description: string;
        filePath: string;
    }
}