import {ActionWithPayload, lookUpMatcher, ReducerLookUp} from '../../helpers';
import {Action} from 'redux';
import * as types from '../actions/auth.types';

export interface AuthState {
    loginError: any;
    isLoggedIn: boolean;
    pending: boolean;
}

export const initialAuthState: AuthState = {
    loginError: false,
    isLoggedIn: false,
    pending: false
};

const lookUp: ReducerLookUp<AuthState> = {
    [types.LOGIN_USER]: (state, action) => {
        return {...state, pending: true, loginError: false}
    },
    [types.LOGIN_USER_ERROR]: (state, { payload }) => {
        return {...state, pending: false, loginError: payload}
    },
    [types.LOGIN_USER_SUCCESS]: (state, action) => {
        return {...state, pending: false, loginError: false, isLoggedIn: true}
    }
};

export function authReducer(
    state: AuthState = initialAuthState,
    action: Action | ActionWithPayload<any>): AuthState {
    return lookUpMatcher<AuthState>(lookUp, state, action);
}

