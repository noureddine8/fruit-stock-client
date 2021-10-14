import React, {useState} from 'react';
import {Modal, Text, View} from 'react-native';
import styles from './styles';

function CustomModal({title, content}) {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>title</Text>
          <Text>content</Text>
        </View>
      </View>
    </Modal>
  );
}

export default CustomModal;
