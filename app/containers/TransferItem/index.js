import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import Header from '../../components/Header';

function TransferItem() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      <Header title={'Transfert de fruits'} />
      <View style={styles.body}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <TouchableOpacity onPress={() => console.log(selectedLanguage)}>
          <Text>Press</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TransferItem;
