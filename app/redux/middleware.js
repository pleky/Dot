import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const middlewares = [];

// middleware thunk
middlewares.push(thunk);

// middleware react navigation
// const reactNavigation = createReactNavigationReduxMiddleware('root', state => state.router);
// middlewares.push(reactNavigation);

// middleware redux promise
middlewares.push(promiseMiddleware);

// middlewares logger
const logger = createLogger();
middlewares.push(logger);

export default middlewares;
