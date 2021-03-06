import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flex: 0.25,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1ac748',
    zIndex: -1,
  },
  transferButtonContainer: {
    backgroundColor: 'grey',
    padding: 7,
    marginHorizontal: 5,
    alignSelf: 'flex-end',
    borderRadius: 10,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  transferButtonHeaderTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 40,
  },

  transferTitle: {fontSize: 16, color: 'purple'},
});

export default styles;
