import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {closeModal} from '../../../Modal/store/actions.creator';
import styles from './styles';

function TransferConfirmation({params}) {
  const {senderCity, recieverCity, item, quantity, handleTransferPress} =
    params;
  const dispatch = useDispatch();

  const handleCancelPress = () => {
    dispatch(closeModal());
  };

  const handleConfirmPress = () => {
    dispatch(closeModal());
    handleTransferPress();
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modal}>
        <View style={styles.modalTitleContainer}>
          <Text style={styles.modalTitle}>Confirmation de transfert</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>
            Voulez vous vraiment envoyer {quantity} de {item} de {senderCity}{' '}
            vers {recieverCity} ?
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleCancelPress}>
            <Text style={styles.buttonText}>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleConfirmPress}>
            <Text style={styles.buttonText}>Confirmer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default TransferConfirmation;
