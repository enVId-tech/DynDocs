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
}