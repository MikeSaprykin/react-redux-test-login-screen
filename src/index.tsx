import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './containers';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { rootReducer } from './store';

const store = createStore(rootReducer, composeWithDevTools());


ReactDOM.render(
<Provider store={store}>
            <App />
        </Provider>
  ,document.getElementById('root') as HTMLElement
);
