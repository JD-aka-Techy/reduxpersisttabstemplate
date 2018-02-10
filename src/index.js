import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();


