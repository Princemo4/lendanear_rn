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
  ellipseStack: {
    height: 899,
    marginTop: 34,
    marginLeft: -50,
    marginRight: -449
  },
  ellipse: {
    top: 9,
    left: 0,
    width: 859,
    height: 890,
    position: "absolute"
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
  svgBkgContainer: {
      backgroundColor: "#1fb2cc",
      width: '100%',
      flex: 1,
  },
  settingContent: {
    position: 'absolute', 
    left: 0, 
    right: 0, 
    top: 0, 
    bottom: 0,
    paddingHorizontal: 26,
    paddingTop: 30,
  },
  setting: {
    color: 'white',
    fontSize: 24,
    fontFamily: AppStyles.fontFamily.boldFont,
    paddingLeft: 20,
  },
  emailText: {
    color: 'black',
    fontSize: 12,
  },
  username: {
    color: "#1fb2cc",
    fontSize: 20,
  },
  profileWrapper: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingVertical: 30, 
    paddingLeft: 20,
  },
  imgContainer: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    overflow: 'hidden'
  },
  profileImg: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    resizeMode: 'cover'
  },
  textContainer: {
    flexDirection: 'column-reverse'
  },
  settingTextSection: {
    fontFamily: AppStyles.fontFamily.boldFont,
    fontSize: 20,
    color: 'black'
  },
  settingItemContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    paddingLeft: 24,
    justifyContent: 'space-between'
  },
  iconForward: {
    color: "rgba(31,178,204,1)",
    fontSize: 30
  },
  settingItemText: {
    fontSize: 16,
    color: 'black'
  },
  notificationContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})