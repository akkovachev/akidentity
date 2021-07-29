"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scopeSingleton = exports.ScopeService = void 0;
class ScopeService {
    constructor(options) {
        this.validateEndpoint = '';
        this.scopesMap = {};
        this.validateEndpoint = options && options.validateEndpoint ? options.validateEndpoint : '';
    }
    setScope(forRoute, scope) {
        if (!this.scopesMap[forRoute]) {
            this.scopesMap[forRoute] = '';
        }
        this.scopesMap[forRoute] = scope;
    }
    getScopes(forRoute) {
        return this.scopesMap[forRoute] || undefined;
    }
    getScopesMap() {
        return this.scopesMap;
    }
    setValidateEndpoint(ep) {
        this.validateEndpoint = ep;
    }
    getValidateEndpoint() {
        return this.validateEndpoint;
    }
}
exports.ScopeService = ScopeService;
exports.scopeSingleton = new ScopeService();
