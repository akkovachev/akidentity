import { StatusTypes, ValidateCallResponse } from "../models/simple-response.model";
export declare class HelperUtil {
    static handledResponseOutput(message: string, type: StatusTypes): {
        message: string;
        type: StatusTypes;
    };
    static handleValidateTokenResponse(obj: ValidateCallResponse): {
        valid: boolean;
        errors: string[];
    };
    static getScopes(scope: string): string[];
}
