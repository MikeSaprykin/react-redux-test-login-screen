import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App, LoggedIn } from './containers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer, epicMiddleware } from './store';
import { Redirect, Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import './index.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(epicMiddleware, middleware)
));

ReactDOM.render(
<Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Route path='/login' component={App}/>
                    <Route path='/logged-in' component={LoggedIn}/>
                    <Route
                        exact={true}
                        path='/'
                        render={() => <Redirect to='/login'/>}
                    />
                </div>
            </ConnectedRouter>
        </Provider>
  , document.getElementById('root') as HTMLElement
);
