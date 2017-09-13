import { combineEpics } from 'redux-observable';
import { loginEpic } from './login.epic';

export const authEpics = combineEpics(
    loginEpic
);