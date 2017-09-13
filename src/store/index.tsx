import { combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { authReducer, authEpics } from './auth';

export const epicMiddleware = createEpicMiddleware(authEpics);

export const rootReducer = combineReducers({
   auth: authReducer
});