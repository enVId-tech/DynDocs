import { Function } from "@/lib/types";

export class DocPage {
    /** Absolute path to the page */
    public path: string;

    /** Functions within the page */
    public functions: Function[];

    /** Readme path */
    public readmePath: string;

    /** File name at absolute path */
    private fName: string;

    /** Constructor */
    constructor() {
        this.path = "";
        this.functions = [];
        this.readmePath = "";
        this.fName = "";
    }

    public get fileName(): string {
        return this.fName;
    }

    set fileName(value: string) {
        this.fName = value;
    }
}

export class Branch {
    /** Name of the branch */
    public name: string;

    /** Path to the branch */
    public path: string;

    /** Absolute file paths within branch */
    public files: string[];

    constructor(name: string, path: string) {
        this.name = name;
        this.path = path;
        this.files = [];
    }
}