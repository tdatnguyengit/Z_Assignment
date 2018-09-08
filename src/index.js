import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, {});

const appRoot = (
    <Provider store={store}>
            <App />
    </Provider>
)

ReactDOM.render(appRoot, document.getElementById('root'));
registerServiceWorker();
