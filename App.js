import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './app/containers/Home';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
