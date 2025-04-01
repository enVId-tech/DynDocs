export type Comment = {
    /** Comment text */
    text: string[];

    /** Is a JSDoc comment */
    isJSDoc: boolean;

    /** Is a multiline comment */
    isMultiline: boolean;

}

export type Function = {
    functionName: string;
    associatedComment: Comment;
    functionSignature: string;
    functionBody: string;
}

export type DocBlock = {
    name: string;
    description: string;
    params?: Array<{name: string, type: string, description: string}>;
    returns?: {type: string, description: string};
    example?: string;
    filePath?: string;
};