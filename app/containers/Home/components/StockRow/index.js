import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

function StockRow({title, quantity, containerStyle}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{quantity}</Text>
    </View>
  );
}

export default StockRow;
