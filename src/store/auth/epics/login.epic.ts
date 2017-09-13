import {ActionsObservable} from 'redux-observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mapTo';

export const loginEpic = (action$: ActionsObservable<any>) =>
    action$
        .filter(action => action.type === 'PONG')
        .delay(1000) // Asynchronously wait 1000ms then continue
        .mapTo({ type: 'PONG' });