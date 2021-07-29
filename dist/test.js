"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../akIdentity/index");
const akIdentity = new index_1.AkIdentity('http://localhost:3100/api/validate');
let mockedReq = {
    url: "/test",
    header: (param) => {
        if (param === 'Authorization') {
            return 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwic2NvcGVzIjoiY29uc29sZSx5b3V0dWJlLEFMTCIsImlhdCI6MTYyNzQ4MzYxNCwiZXhwIjoxNjI4MDg4NDE0fQ.8GkaDLR-_JBDaJsZJ9gy9l8Of-Oo_9hAFqQ3pgtcjzk'; //ALL as scope
            // return 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwic2NvcGVzIjoiY29uc29sZSx5b3V0dWJlIiwiaWF0IjoxNjI3NDg0MzQ0LCJleHAiOjE2MjgwODkxNDR9.iFfNWfTYHAiiHnmGf9JouOsYYg0U40fEUHbnShp1Afg' //console, youtube
            //return 'Bearer invalid_token_blah'
        }
    }
};
const mockRes = {
    response: {
        message: '',
        status: 0
    },
    send: (m) => {
        mockRes.response.message = m;
        console.log('the response is', mockRes.response);
        return mockRes;
    },
    status: (s) => {
        mockRes.response.status = s;
        return mockRes;
    }
};
index_1.authMiddleware()(mockedReq, mockRes, () => {
    console.log('in the end');
});
