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
  iconListening: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    opacity: 0.94,
    position: 'absolute',
    right: 0,
    bottom: 4,
    top: 4,
  },
  iconMicro: {
    color: "rgba(170,9,9,1)",
    fontSize: 33,
    marginLeft: 16,
    opacity: 0.54,
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
  talkToSomeone: {
    fontFamily: AppStyles.fontFamily.mediumFont,
    color: "rgba(173,0,0,1)",
    fontSize: 24,
    opacity: 0.63,
  },
  talkContainer: {
    flexDirection: 'row',
    height: 44,
    width: 302,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 5,
    shadowOpacity: 0.26,
    shadowRadius: 5,
    justifyContent: 'center',
  },
  listenToSomeone: {
    width: '100%',
    fontFamily: AppStyles.fontFamily.mediumFont,
    color: "white",
    fontSize: 24,
    opacity: 0.63,
    paddingVertical: 4,
    textAlign: 'center',
  },
  listenContainer: {
    marginTop: 30,
    width: 160,
    backgroundColor: 'rgba(144,19,254,1)',
    flexDirection: 'row',
  }
})