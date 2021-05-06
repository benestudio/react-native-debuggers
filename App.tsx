import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
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
        <Text style={styles.header}>This is a header</Text>
        <Text>{dummy.test ? 'Dummy' : 'Not dummy'}</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 40,
  },
});

export default Reactotron ? Reactotron.overlay(App) : App;
