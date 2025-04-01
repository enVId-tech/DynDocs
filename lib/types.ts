// export type Comment = {
//     /** Comment text */
//     text: string[];
//
//     /** Is a JSDoc comment */
//     isJSDoc: boolean;
//
//     /** Is a multiline comment */
//     isMultiline: boolean;
//
// }
//
// export type Function = {
//     functionName: string;
//     associatedComment: Comment;
//     functionSignature: string;
//     functionBody: string;
// }

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