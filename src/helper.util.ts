import { StatusTypes, ValidateCallResponse } from "../models/simple-response.model";

export class HelperUtil {

  static handledResponseOutput(message: string, type: StatusTypes) {
    return { message, type };
  }

  static handleValidateTokenResponse(obj: ValidateCallResponse) {
    return {
      ...obj,
    };
  }

  static getScopes(scope: string) {
    if (scope) {
      return scope.split(",");
    } else {
      return [];
    }
  }
}
