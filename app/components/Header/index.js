import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

function Header({title}) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

export default Header;
