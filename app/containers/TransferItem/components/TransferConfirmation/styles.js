import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    opacity: 0.9,
  },
  modal: {
    minHeight: '35%',
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#1ac748',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 8,
  },
  modalTitleContainer: {alignItems: 'center'},
  modalTitle: {color: 'white', fontWeight: 'bold', fontSize: 26},
  contentContainer: {padding: 10, marginBottom: 20, marginTop: 10},
  content: {fontSize: 17, fontWeight: '500'},
  buttonsContainer: {flexDirection: 'row', flex: 1, marginBottom: 5},
  buttonContainer: {
    flex: 0.5,
    marginHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    maxHeight: 45,
  },
  buttonText: {fontSize: 18, fontWeight: '500'},
});

export default styles;
