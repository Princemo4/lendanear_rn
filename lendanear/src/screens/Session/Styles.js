import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

export default StyleSheet.create({
  container: {
  },
  headerContainer: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#18b5ce',
  },
  v2M: {
    color: 'white',
    fontSize: 28,
    fontFamily: AppStyles.fontFamily.mediumFont,
    textAlign: "center",
    marginBottom: 8,
    alignSelf: "center"
  },
  logoUnderline: {
    height: 5,
    backgroundColor: "black",
    width: 40,
  },
  v2Column: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerDivider: {
    width: '100%', height: 1, elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    backgroundColor: 'rgba(210,210,210,1)',
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
})