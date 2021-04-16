import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createReactotron from '../reactotron-config';
import rootReducer from './reducers';

const Reactotron = createReactotron();

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
