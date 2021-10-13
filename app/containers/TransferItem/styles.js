import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {flex: 1},
  body: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30,
    padding: 10,
  },
  citiesList: {marginTop: 50, flex: 0.1},
  stockList: {flex: 1, marginTop: 30},
  totalContainer: {margin: 80},
  inputContainer: {marginHorizontal: 20},
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginTop: 15,
    marginStart: 10,
    borderRadius: 4,
    borderColor: 'grey',
  },
  buttonContainer: {
    backgroundColor: '#1ac748',
    alignSelf: 'center',
    marginTop: 40,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  label: {color: '#1ac748', fontSize: 16, fontWeight: '600'},

  buttonText: {fontSize: 17, color: 'white', fontWeight: 'bold'},
});

export default styles;
