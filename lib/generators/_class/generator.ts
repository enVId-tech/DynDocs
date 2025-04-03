import FunctionDoc = Functions.FunctionDoc;
import ClassSignature = Classes.ClassSignature;
import TypeDoc = Types.TypeDoc;
import VariableDoc = Variables.VariableDoc;
import Constants = Variables.Constants;
import EnumDoc = Enums.EnumDoc;
import InterfaceDoc = Interfaces.InterfaceDoc;

/**
 * @class Generator
 * @desc This class is responsible for storing repository information in order to create documentation later on
 */
class Generator {
    private static functions: Map<string, FunctionDoc>;
    private static classes: Map<string, ClassSignature>

    private static types: Map<string, TypeDoc>
    private static interfaces: Map<string, InterfaceDoc>

    private static variables: Map<string, VariableDoc>
    private static constants: Map<string, Constants>
    private static enums: Map<string, EnumDoc>

    constructor(functions: Map<string, FunctionDoc>) {
        // TODO: Add property initializations here
    }

    set Functions(functions: Map<string, FunctionDoc>) {
        Generator.functions = functions;
    }

    get Functions(): Map<string, FunctionDoc> {
        return Generator.functions;
    }
}