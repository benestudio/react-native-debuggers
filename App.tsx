import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Reactotron from './reactotron-config';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Text>asd</Text>
      </SafeAreaView>
    </>
  );
};
export default Reactotron.overlay(App);
