import {ActionsObservable} from 'redux-observable';
import {push} from 'react-router-redux';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {of} from 'rxjs/observable/of';
import { ajax } from 'rxjs/observable/dom/ajax';

import { LOGIN_USER } from '../actions';
import { toPayload } from '../../helpers';
import {loginUserError, loginUserSuccess} from '../actions';


const API_URL = 'https://seedbox-node-backend.herokuapp.com/api/v1/test-login';

export const loginEpic = (action$: ActionsObservable<any>) =>
    action$
        .ofType(LOGIN_USER)
        .map(toPayload)
        .switchMap(payload => {
            return ajax.post(API_URL, payload, {'Content-Type': 'application/json'})
                .mergeMap(({response}) => [
                    loginUserSuccess(),
                    push('/logged-in')
                ])
                .catch(error => of(loginUserError()))
        });
