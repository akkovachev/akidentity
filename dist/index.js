"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = exports.scopeService = exports.AkIdentity = void 0;
const auth_middleware_1 = require("./src/auth.middleware");
const scope_service_1 = require("./src/services/scope.service");
class AkIdentity {
    constructor(validateEndpoint) {
        this.scopeService = scope_service_1.scopeSingleton;
        this.scopeService.setValidateEndpoint(validateEndpoint);
    }
}
exports.AkIdentity = AkIdentity;
exports.scopeService = scope_service_1.scopeSingleton;
const authMiddleware = (scope = "GENERIC") => {
    if (scope === '')
        scope = 'GENERIC';
    return (req, res, next) => {
        if (scope) {
            scope_service_1.scopeSingleton.setScope(req.url, scope);
        }
        auth_middleware_1.auth(req, res, next);
    };
};
exports.authMiddleware = authMiddleware;
