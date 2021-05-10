import AsyncStorage from '@react-native-community/async-storage';
import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

let ReactotronInstance = null;

const create = () => {
  if (__DEV__) {
    const { scriptURL } = NativeModules.SourceCode;
    const host = scriptURL.split('://')[1].split(':')[0];

    ReactotronInstance = Reactotron.setAsyncStorageHandler(AsyncStorage)
      .configure({ host })
      .useReactNative()
      .use(reactotronRedux())
      .connect();

    console.tron = ReactotronInstance.log;
  }
  return ReactotronInstance;
};

export default create();
