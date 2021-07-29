export declare class ScopeService {
    private validateEndpoint;
    constructor(options?: ScopeOptions);
    private scopesMap;
    setScope(forRoute: string, scope: string): void;
    getScopes(forRoute: string): string | undefined;
    getScopesMap(): ScopeMap;
    setValidateEndpoint(ep: string): void;
    getValidateEndpoint(): string;
}
interface ScopeOptions {
    validateEndpoint: string;
}
interface ScopeMap {
    [key: string]: string;
}
export declare const scopeSingleton: ScopeService;
export {};
