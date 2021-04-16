import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';

import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import redux from './store';

const ConnectedApp = () => (
  <Provider store={redux.store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ConnectedApp);
