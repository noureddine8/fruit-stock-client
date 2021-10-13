import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {Text, View} from 'react-native';
import styles from './styles';

function SelectPicker({label, data, selectedLanguage, setSelectedLanguage}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Picker
        selectedValue={selectedLanguage}
        onValueChange={setSelectedLanguage}>
        {data.map(item => (
          <Picker.Item key={`${item}`} label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
}

export default SelectPicker;
