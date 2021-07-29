"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const helper_util_1 = require("./helper.util");
const scope_service_1 = require("./services/scope.service");
const axios_1 = __importDefault(require("axios"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let scopesService = scope_service_1.scopeSingleton;
const auth = async (req, res, next) => {
    if (!req.header('Authorization')) {
        res.status(500).send(helper_util_1.HelperUtil.handledResponseOutput('Authorization Header is missing', 'ERROR'));
        return;
    }
    const scopes = [];
    let getScopesForThisRequest = scope_service_1.scopeSingleton.getScopes(req.url);
    if (getScopesForThisRequest) {
        scopes.push(getScopesForThisRequest);
    }
    try {
        const token = req.header('Authorization').replace('Bearer', '').trim();
        if (scopesService.getValidateEndpoint()) {
            let checkIfHasActiveSession = await axios_1.default.post(scopesService.getValidateEndpoint(), {
                token: token,
                scopes: scopes
            });
            if (checkIfHasActiveSession.data.valid) {
                let decoded;
                decoded = jsonwebtoken_1.default.decode(token);
                req.userId = decoded.id;
                next();
            }
            else {
                console.log(checkIfHasActiveSession.data);
                res.status(401).send(helper_util_1.HelperUtil.handleValidateTokenResponse(checkIfHasActiveSession.data));
            }
        }
        else {
            res.status(500).send(helper_util_1.HelperUtil.handledResponseOutput('Validate Endpoint is not configured ', 'ERROR'));
        }
    }
    catch (e) {
        console.log('middleware', e);
        res.send(e);
        console.log('some kind of errr occured', e);
    }
};
exports.auth = auth;
