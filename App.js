import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './app/containers/Home/styles';

import Navigator from './app/utils/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
};

export default App;
