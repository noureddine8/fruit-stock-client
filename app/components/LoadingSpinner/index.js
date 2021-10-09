import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './style';

function LoadingSpinner() {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color="#1ac748" />
    </View>
  );
}

export default LoadingSpinner;
