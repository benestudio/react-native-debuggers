import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

let ReactotronInstance = null;

if (__DEV__) {
  ReactotronInstance = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative()
    .connect();
  console.tron = ReactotronInstance.log;
}

export default ReactotronInstance;
