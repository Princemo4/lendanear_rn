import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

export default StyleSheet.create({
  container: {
    marginLeft: 21,
    marginRight: 21,
    justifyContent: 'center',
  },
  inputForm: {
    marginLeft: 28,
    marginRight: 21,
    marginBottom: 80,
  },
  marginVerticalInputs: {
    marginTop: 27
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  createAccountButton: {
    width: 104,
    height: 14,
    justifyContent: 'center',
    alignItems:'center',
    paddingVertical: 15,
  },
  createAccountText: {
    color: 'white'
  },
  v2M: {
    color: 'white',
    fontSize: 42,
    fontFamily: AppStyles.fontFamily.mediumFont,
    textAlign: "center",
    marginBottom: 8,
    alignSelf: "center"
  },
  logoUnderline: {
    height: 8,
    backgroundColor: "#25cdec",
    marginLeft: 21,
    marginRight: 21
  },
  v2Column: {
    marginBottom: 7,
    marginLeft: 100,
    marginRight: 100,
  },
})