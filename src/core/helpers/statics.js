import { Dimensions, Platform, Alert } from "react-native";

export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;

export const IS_ANDROID = Platform.OS === "android";

export function showAlertDialog(message, title = 'Error') {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Ok',
        onPress: () => null,
        style: 'cancel',
      },
    ],
    { cancelable: true },
  );
}

/**
 * convert int to string with leading zero
 */
 export function zeroPad(num, size) {
  var s = num + '';
  while (s.length < size) {
    s = '0' + s;
  }
  return s;
}
