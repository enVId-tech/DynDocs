import { Function } from "@/lib/types";

export abstract class DocPage {
    /** Absolute path to the page */
    public path: string;

    /** Functions within the page */
    public functions: Function[];

    /** Readme path */
    public readmePath: string;

    /** File name at absolute path */
    public fileName: string;

    /** Constructor */
    constructor() {
        this.path = "";
        this.functions = [];
        this.readmePath = "";
        this.fileName = "";
    }
}