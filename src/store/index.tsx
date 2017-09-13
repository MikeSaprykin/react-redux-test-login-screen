import { combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { reducer as formReducer } from 'redux-form';
import { authReducer, authEpics } from './auth';

export const epicMiddleware = createEpicMiddleware(authEpics);

export const rootReducer = combineReducers({
   auth: authReducer,
   forms: formReducer
});