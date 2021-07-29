import { ScopeService } from "./src/services/scope.service";
export declare class AkIdentity {
    scopeService: ScopeService;
    constructor(validateEndpoint: string);
}
export declare const scopeService: ScopeService;
export declare const authMiddleware: (scope?: string) => (req: any, res: any, next: any) => void;
