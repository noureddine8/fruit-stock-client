import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import Header from '../../components/Header';
import {reduceMethod} from '../../utils/helpers';
import StockRow from './components/StockRow';
import LoadingSpinner from '../../components/LoadingSpinner';
import {getStoreRequest} from './store/actions.creator';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import CheckButton from '../../components/CheckButton';
import {data} from '../../utils/constants';
import {TRANSFER_ITEM_SCREEN} from '../../utils/navigation/screenNames';

function Home({navigation}) {
  const dispatch = useDispatch();
  const {loading, store} = useSelector(state => state.storeState);
  const renderCities = ({item}) => (
    <CheckButton
      city={item}
      selectedCity={store.city}
      onPress={() => {
        dispatch(getStoreRequest(item));
      }}
    />
  );

  const renderStocks = ({item}) => (
    <StockRow title={item.item} quantity={item.quantity} />
  );

  const handleTransferPress = () => navigation.navigate(TRANSFER_ITEM_SCREEN);

  useEffect(() => {
    dispatch(getStoreRequest('Marseille'));
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <View style={styles.container}>
      <Header
        title={'Stock par ville'}
        handleTransferPress={handleTransferPress}
      />
      <View style={styles.body}>
        <View style={styles.citiesList}>
          <FlatList data={data} renderItem={renderCities} horizontal />
        </View>
        <View style={styles.stockList}>
          <FlatList data={store.stocks} renderItem={renderStocks} />
          <StockRow
            containerStyle={styles.totalContainer}
            title="Total"
            quantity={store.stocks?.reduce(reduceMethod, 0)}
          />
        </View>
      </View>
    </View>
  );
}

export default Home;
