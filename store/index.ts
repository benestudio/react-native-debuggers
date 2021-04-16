import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reactotron from '../reactotron-config';
import rootReducer from './reducers';

const middlewares: Middleware[] = [];

const composables = [
  applyMiddleware(...middlewares),
  ...(Reactotron !== null && Reactotron.createEnhancer
    ? [Reactotron.createEnhancer()]
    : []),
];

const composedMiddlewares = compose(composeWithDevTools(...composables));

const store = createStore(rootReducer, composedMiddlewares);

export default { store };
