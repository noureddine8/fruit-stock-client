import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import SelectPicker from './components/SelectPicker';
import {cities, fruits} from '../../utils/constants';
import {transferStockRequest} from './store/actions.creator';
import {useDispatch, useSelector} from 'react-redux';
import {formatTransferBody} from '../../utils/helpers';
import {HOME_SCREEN} from '../../utils/navigation/screenNames';
import {getStoreRequest} from '../Home/store/actions.creator';
import LoadingSpinner from '../../components/LoadingSpinner';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function TransferItem({navigation}) {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.transferState);
  const {loading: storeLoading} = useSelector(state => state.storeState);

  const [senderCity, setSenderCity] = useState(cities[0]);
  const [recieverCity, setRecieverCity] = useState(cities[1]);
  const [item, setItem] = useState(fruits[0]);
  const [quantity, setQuantity] = useState('');

  const getStoreCallback = () => {
    navigation.navigate(HOME_SCREEN);
  };

  const transferCallback = () => {
    dispatch(getStoreRequest('Marseille', getStoreCallback));
  };

  const handleTransferPress = () => {
    dispatch(
      transferStockRequest(
        formatTransferBody(senderCity, recieverCity, item, quantity),
        transferCallback,
      ),
    );
  };

  if (loading || storeLoading) {
    return <LoadingSpinner />;
  }
  return (
    <View style={styles.container}>
      <Header title={'Transfert de fruits'} />
      <KeyboardAwareScrollView
        style={styles.body}
        showsVerticalScrollIndicator={false}>
        <SelectPicker
          data={cities}
          label="Ville de départ"
          selectedLanguage={senderCity}
          setSelectedLanguage={setSenderCity}
        />
        <SelectPicker
          data={cities}
          label="Ville d'arrivée"
          selectedLanguage={recieverCity}
          setSelectedLanguage={setRecieverCity}
        />
        <SelectPicker
          data={fruits}
          label="Article à transférer"
          selectedLanguage={item}
          setSelectedLanguage={setItem}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Label</Text>
          <TextInput
            style={styles.input}
            value={`${quantity}`}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleTransferPress}>
          <Text style={styles.buttonText}>Transférer</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default TransferItem;
