import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, compose} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));
const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
