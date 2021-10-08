import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function CheckButton({city, selectedCity, onPress}) {
  return (
    <TouchableOpacity
      style={
        selectedCity === city ? styles.selectedCity : styles.unSelectedCity
      }
      onPress={onPress}>
      <Text
        style={
          selectedCity === city
            ? styles.selectedCityText
            : styles.unSelectedCityText
        }>
        {city}
      </Text>
    </TouchableOpacity>
  );
}

export default CheckButton;
