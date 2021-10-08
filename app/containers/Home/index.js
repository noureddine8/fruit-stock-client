import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import CheckButton from '../../components/CheckButton';
import Header from '../../components/Header';
import {data} from '../../utils/constants';
import styles from './styles';

function Home() {
  const [selectedCity, setSelectedCity] = useState(data[0]);
  const renderCities = ({item}) => (
    <CheckButton
      city={item}
      selectedCity={selectedCity}
      onPress={() => setSelectedCity(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.flatList}>
          <FlatList data={data} renderItem={renderCities} horizontal />
        </View>
        <View style={{flex: 1}}>
          <Text>HAHAH</Text>
        </View>
      </View>
    </View>
  );
}

export default Home;
