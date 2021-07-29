import { auth } from "./src/auth.middleware";
import { ScopeService, scopeSingleton } from "./src/services/scope.service";

export class AkIdentity {
    scopeService: ScopeService = scopeSingleton

    constructor(validateEndpoint: string) {
        this.scopeService.setValidateEndpoint(validateEndpoint)
    }
}

export const scopeService = scopeSingleton

export const authMiddleware = (scope: string = "GENERIC") => {
    if(scope === '') scope = 'GENERIC'
    
    return (req:any, res: any, next:any) => {
        if(scope) {
            scopeSingleton.setScope(req.url, scope)
        }
        auth(req, res, next);
    }
}