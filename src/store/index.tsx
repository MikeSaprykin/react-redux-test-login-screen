import { combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { reducer as formReducer } from 'redux-form';
import { authReducer, authEpics, loginErrorState } from './auth';
import { routerReducer } from 'react-router-redux';
import { createSelector } from 'reselect';

export const epicMiddleware = createEpicMiddleware(authEpics);

export const rootReducer = combineReducers({
   auth: authReducer,
   form: formReducer,
   router: routerReducer
});

const getAuthState = state => state.auth;
export const loginError = createSelector(getAuthState, loginErrorState);