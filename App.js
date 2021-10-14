import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './app/containers/Home/styles';
import CustomModal from './app/containers/Modal';

import Navigator from './app/utils/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
      <CustomModal />
    </SafeAreaView>
  );
};

export default App;
