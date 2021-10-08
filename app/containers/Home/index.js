import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import CheckButton from '../../components/CheckButton';
import Header from '../../components/Header';
import {data, dummyStocks, secondDummyStocks} from '../../utils/constants';
import {reduceMethod} from '../../utils/helpers';
import StockRow from './components/StockRow';
import styles from './styles';

function Home() {
  const [selectedCity, setSelectedCity] = useState(data[0]);
  const [stocks, setStocks] = useState(dummyStocks);

  const renderCities = ({item}) => (
    <CheckButton
      city={item}
      selectedCity={selectedCity}
      onPress={() => {
        setSelectedCity(item);
        setStocks(secondDummyStocks);
      }}
    />
  );

  const renderStocks = ({item}) => (
    <StockRow title={item.item} quantity={item.quantity} />
  );

  const totalQuantity = stocks.reduce(reduceMethod, 0);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.citiesList}>
          <FlatList data={data} renderItem={renderCities} horizontal />
        </View>
        <View style={styles.stockList}>
          <FlatList data={stocks} renderItem={renderStocks} />
          <StockRow
            containerStyle={styles.totalContainer}
            title="Total"
            quantity={totalQuantity}
          />
        </View>
      </View>
    </View>
  );
}

export default Home;
