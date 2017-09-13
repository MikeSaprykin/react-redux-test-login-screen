import {ActionWithPayload, lookUpMatcher, ReducerLookUp} from '../../helpers';
import {Action} from 'redux';

export interface AuthState {
    loginError: any;
}

export const initialAuthState: AuthState = {
    loginError: false
};

const lookUp: ReducerLookUp<AuthState> = {

};

export function authReducer(
    state: AuthState = initialAuthState,
    action: Action | ActionWithPayload<any>): AuthState {
    return lookUpMatcher<AuthState>(lookUp, state, action);
}

