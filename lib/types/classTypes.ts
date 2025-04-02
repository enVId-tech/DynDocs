namespace Classes {
    import DocBlock = Docs.DocBlock;

    export interface MethodSignature {
        data: DocBlock;

        visibility: VisibilityAccessor;
        accessor?: MethodAccessor;
        isStatic: boolean;
    }

    export interface PropertySignature {
        data: DocBlock;

        visibility: VisibilityAccessor;
        documentation: DocBlock;
    }

    export interface ConstructorSignature {
        data: DocBlock;

        visibility: VisibilityAccessor;
        parameters: Array<{ name: string, type: string }>;
        returnType: string;
    }

    export interface ClassSignature {
        data: DocBlock;

        visibility: VisibilityAccessor;
        constructor: ConstructorSignature;
        propertySignatures: Array<PropertySignature>;
        methods: MethodSignature[];
    }

    export enum MethodAccessor {
        getter,
        setter,
    }

    export enum VisibilityAccessor {
        private,
        public,
        protected
    }
}