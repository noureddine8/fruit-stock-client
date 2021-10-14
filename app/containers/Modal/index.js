import React from 'react';
import {Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {modalsList} from './modalsList';
import {closeModal} from './store/actions.creator';

function CustomModal() {
  const {modalKey, isModalOpen, params} = useSelector(
    state => state.modalState,
  );
  const dispatch = useDispatch();
  const CurrentComponent = modalsList[modalKey];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalOpen}
      onRequestClose={() => {
        dispatch(closeModal());
      }}>
      <CurrentComponent params={params} />
    </Modal>
  );
}

export default CustomModal;
