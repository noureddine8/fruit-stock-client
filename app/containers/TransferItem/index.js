import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

function TransferItem() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={{padding: 40}}>
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
  );
}

export default TransferItem;
