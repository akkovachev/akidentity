export class ScopeService {
    private validateEndpoint: string = ''

    constructor(options?: ScopeOptions) {
        this.validateEndpoint = options && options.validateEndpoint ? options.validateEndpoint : ''
    }

    private scopesMap: ScopeMap = {}

    setScope(forRoute: string, scope: string): void {
        if(!this.scopesMap[forRoute]) {
            this.scopesMap[forRoute] = '';
        }

        this.scopesMap[forRoute] = scope;
    }

    getScopes(forRoute: string) {
        return this.scopesMap[forRoute] || undefined
    }

    getScopesMap(): ScopeMap {
        return this.scopesMap
    }

    setValidateEndpoint(ep: string) {
        this.validateEndpoint = ep;
    }

    getValidateEndpoint(): string {
        return this.validateEndpoint
    }
}

interface ScopeOptions {
    validateEndpoint: string;
}

interface ScopeMap {
    [key: string]: string;
}


export const scopeSingleton = new ScopeService()