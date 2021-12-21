import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

export default StyleSheet.create({
  connectorActive: {
    backgroundColor: 'rgba(30,174,199,1)'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconChecked: {
    color: "rgba(230, 230, 230,1)",
    fontSize: 42,
  },
  iconProgress: {
    color: "rgba(230, 230, 230,1)",
    fontSize: 35,
  },
  iconEmpty: {
    color: "rgba(230, 230, 230,1)",
    fontSize: 38,
  },
  iconActive: {
    color: "rgba(30,174,199,1)",
  },
  connectorLine: {
    width: 56,
    height: 7,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.75,
    borderRadius: 40,
    marginHorizontal: 6,
  },
  stepLabel: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: AppStyles.fontFamily.boldFont,
    marginTop: 37,
    marginLeft: 31
  },
  stepDesc: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: AppStyles.fontFamily.boldFont,
    marginTop: 17,
    marginLeft: 31
  },
})