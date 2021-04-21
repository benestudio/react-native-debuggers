import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Reactotron from './reactotron-config';
import { IState } from './src/store/reducers';

const App = () => {
  console.tron('Visible only in Reactotron');
  console.log('Visible only in classic debuggers');
  const dummy = useSelector((state: IState) => state.dummy);

  return (
    <>
      <SafeAreaView>
        <Text>asd</Text>
        <Text>{dummy.test ? 'Dummy' : 'Not dummy'}</Text>
      </SafeAreaView>
    </>
  );
};
export default Reactotron ? Reactotron.overlay(App) : App;
