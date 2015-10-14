import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './stores/stores';

//let store = createStore(todoApp);

React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.body
);