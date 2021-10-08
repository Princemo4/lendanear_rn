import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

export default StyleSheet.create({
  container: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: 'center'
  },
  textInput: {
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    fontSize: AppStyles.fontSizeSet.sizeNormal,
    fontFamily: AppStyles.fontFamily.regularFont,
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
})