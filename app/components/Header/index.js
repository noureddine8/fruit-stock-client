import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';

function Header({title, handleTransferPress}) {
  return (
    <View style={styles.headerContainer}>
      {handleTransferPress && (
        <TouchableHighlight
          onPress={handleTransferPress}
          style={styles.transferButtonContainer}>
          <Text style={styles.transferTitle}>Transférer</Text>
        </TouchableHighlight>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

export default Header;
