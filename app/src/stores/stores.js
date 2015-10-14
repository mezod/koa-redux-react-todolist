import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todo from '../reducers';

const storeWithMiddleware = applyMiddleware (
	thunkMiddleware
)(createStore);
const store = storeWithMiddleware(todo);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers/reducers');
    store.replaceReducer(nextRootReducer);
  });
}


export default store;