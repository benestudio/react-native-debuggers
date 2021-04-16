import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

let ReactotronInstance = null;

const create = () => {
  if (__DEV__) {
    ReactotronInstance = Reactotron.setAsyncStorageHandler(AsyncStorage)
      .configure()
      .useReactNative()
      .use(reactotronRedux())
      .connect();

    console.tron = ReactotronInstance.log;
  }
  return ReactotronInstance;
};

export default create();
