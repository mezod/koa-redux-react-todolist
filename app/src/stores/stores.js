import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todoApp from '../reducers/reducers';
import { fetchTodos } from '../actions/actions';

const storeWithMiddleware = applyMiddleware (
	thunkMiddleware
)(createStore);
const store = storeWithMiddleware(todoApp);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers/reducers', () => {
    const nextRootReducer = require('../reducers/reducers');
    store.replaceReducer(nextRootReducer);
  });
}

//store.dispatch(fetchTodos());

export default store;