import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>header</Text>
    </View>
  );
}

export default Header;
