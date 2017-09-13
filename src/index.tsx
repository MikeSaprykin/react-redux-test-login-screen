import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './containers';
import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware, createStore} from 'redux';
import { rootReducer, epicMiddleware } from './store';
import {BrowserRouter, Route} from 'react-router-dom';
import {Switch} from 'react-router';

import './index.css';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(epicMiddleware)
));

ReactDOM.render(
<Provider store={store}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={App}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
  ,document.getElementById('root') as HTMLElement
);
