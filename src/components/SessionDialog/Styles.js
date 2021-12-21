import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';
export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 19,
    shadowColor: "rgba(214,213,213,1)",
    shadowOffset: {
      width: 6,
      height: 6
    },
    elevation: 81,
    shadowOpacity: 1,
    shadowRadius: 27,
    marginTop: 14,
    paddingBottom: 12,
    overflow: "hidden",
  },
  voiceSessionActive: {
    fontFamily: AppStyles.fontFamily.regularFont,
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    width: '100%',
    marginTop: 41,
    textAlign: 'center'
  },
  voiceSessionTime: {
    fontFamily: AppStyles.fontFamily.regularFont,
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    width: '100%',
    marginTop: 18,
    textAlign: 'center'
  },
  userList: {
    backgroundColor: "rgba(15,16,16,1)",
    marginHorizontal: 20,
    marginTop: 20,
  },
  listHeader: {
      width: '100%',
      paddingVertical: 8,
      backgroundColor: "rgba(29,28,28,1)",
      borderWidth: 1,
      borderColor: "rgba(39,42,42,1)",
      justifyContent: 'center',
      alignItems: 'center'
  },
  listHeaderText: {
    fontFamily: AppStyles.fontFamily.regularFont,
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    opacity: 0.78,
    textAlign: 'center'
  },
  userListScroll: {
    paddingHorizontal: 8,
    height: 232
  },
  leaveSession: {
    fontFamily: AppStyles.fontFamily.boldFont,
    color: "rgba(255,255,255,1)",
    marginTop: 8,
  },
  buttonContainer: {
    width: '70%',
    justifyContent: 'space-between',
    marginTop: 3,
    flexDirection: 'row'
  },
  sessionButton: {
    alignItems: 'center'
  },
  iconLeave: {
    color: "rgba(208,2,27,1)",
    fontSize: 67,
  },
  iconMute: {
    color: "rgba(126,211,33,1)",
    fontSize: 67,
  }
});
