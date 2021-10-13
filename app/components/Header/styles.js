import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flex: 0.3,
    justifyContent: 'center',
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
    marginTop: -40,
  },
  headerTitle: {fontSize: 26, fontWeight: 'bold', color: 'white'},
  transferTitle: {fontSize: 16, color: 'purple'},
});

export default styles;
