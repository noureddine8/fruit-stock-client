import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  selectedCity: {
    borderRadius: 10,
    backgroundColor: '#99ffb4',
    paddingHorizontal: 30,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unSelectedCity: {
    borderRadius: 10,
    backgroundColor: 'grey',
    paddingHorizontal: 30,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCityText: {color: 'grey', fontSize: 18, fontWeight: 'bold'},
  unSelectedCityText: {color: 'white', fontSize: 18, fontWeight: 'bold'},
});

export default styles;
