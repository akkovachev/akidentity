"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperUtil = void 0;
class HelperUtil {
    static handledResponseOutput(message, type) {
        return { message, type };
    }
    static handleValidateTokenResponse(obj) {
        return {
            ...obj,
        };
    }
    static getScopes(scope) {
        if (scope) {
            return scope.split(",");
        }
        else {
            return [];
        }
    }
}
exports.HelperUtil = HelperUtil;
