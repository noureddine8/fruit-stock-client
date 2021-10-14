import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  modal: {
    flex: 0.2,
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#1ac748',
    padding: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  modalTitle: {color: 'white', fontWeight: 'bold', fontSize: 20},
});

export default styles;
