import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  });
}
