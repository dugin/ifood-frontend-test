import { createStore, applyMiddleware } from 'redux';
import reducers from './root-reducer';
import { createLogger } from 'redux-logger';

const middleWare = [];

function isDevelopment(env) {
  return () => env === 'development';
}

const loggerMiddleware = createLogger({
  predicate: isDevelopment(process.env.NODE_ENV)
});

middleWare.push(loggerMiddleware);

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

export default createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
