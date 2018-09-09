import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

it('renders without crashing', () => {
  const store = createStore(rootReducer, {});
  const appRoot = (
    <Provider store={store}>
      <App />
    </Provider>
  )
  const div = document.createElement('div');
  ReactDOM.render(appRoot, div);
  ReactDOM.unmountComponentAtNode(div);
});
