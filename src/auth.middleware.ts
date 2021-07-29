import { HelperUtil } from "./helper.util";
import { ScopeService, scopeSingleton } from "./services/scope.service";
import axios from 'axios'
import jwt from 'jsonwebtoken';

let scopesService: ScopeService = scopeSingleton;

export const auth = async (req: any, res: any, next: any) => {
    if(!req.header('Authorization')) {
        res.status(500).send(HelperUtil.handledResponseOutput('Authorization Header is missing', 'ERROR'));
        return;
    }

    const scopes: string[] = [];
    let getScopesForThisRequest = scopeSingleton.getScopes(req.url);
    
    if(getScopesForThisRequest) {
        scopes.push(getScopesForThisRequest)
    }

    try {
        const token = req.header('Authorization').replace('Bearer', '').trim();
        if(scopesService.getValidateEndpoint()) {
            let checkIfHasActiveSession = await axios.post(scopesService.getValidateEndpoint(), {
                token: token,
                scopes: scopes
            });
            
            if(checkIfHasActiveSession.data.valid) {
                let decoded: any;
                decoded = jwt.decode(token)

                console.log('decoded', decoded)
                req.userId = decoded.id
                next()
            } else {
                console.log(checkIfHasActiveSession.data)
               res.status(401).send(HelperUtil.handleValidateTokenResponse(checkIfHasActiveSession.data))
            }
        } else {
            res.status(500).send(HelperUtil.handledResponseOutput('Validate Endpoint is not configured ', 'ERROR'))
        }
    } catch(e) {
        console.log('middleware', e)
        res.send(e) 
        console.log('some kind of errr occured', e)
    }
}