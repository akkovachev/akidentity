export interface SimpleResponseModel {
    message: string,
    type: StatusTypes
}

export interface ValidateCallResponse {
    valid: boolean;
    errors: string[];
}

export type StatusTypes = "ERROR" | "SUCCESS";
