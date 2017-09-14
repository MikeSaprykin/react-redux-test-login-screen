import { Action } from 'redux';
import { ActionWithPayload } from '../../helpers';
import * as types from './auth.types';

export interface LoginUserPayload {
    username: string;
    password: string;
}

export const loginUser = (
    payload: LoginUserPayload
): ActionWithPayload<LoginUserPayload> => {
    return {
        type: types.LOGIN_USER,
        payload
    };
};

export const loginUserError = (): Action => {
    return {
        type: types.LOGIN_USER_ERROR
    };
};

export const loginUserSuccess = (): Action => {
    return {
        type: types.LOGIN_USER_SUCCESS
    };
};
