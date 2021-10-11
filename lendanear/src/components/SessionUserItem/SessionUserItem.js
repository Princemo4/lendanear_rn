import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

export default function SessionUserItem(props) {
  const strName = props.userName ?? ""
  const strState = props.userState ?? "listening"
  const isSpeaker = strState === "speaking"

  return (
      <View style={styles.container}>
        <MaterialIconsIcon
          name="person-outline"
          style={[styles.userIcon, isSpeaker ? styles.speakerColor : {}]}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textUserName}>
            { strName }
          </Text>
          <Text style={[styles.textUserState, isSpeaker ? styles.speakerColor : {}]}>
            { strState + ' ...'}
          </Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: "rgba(29,28,28,1)",
    borderWidth: 1,
    borderColor: "rgba(39,42,42,1)",
    borderRadius: 8,
    marginTop: 5,
    paddingHorizontal: 5,
  },
  userIcon: {
    color: "rgba(74,144,226,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 5
  },
  textContainer: {
    flex: 1,
    paddingLeft: 12,
  },
  textUserName: {
    fontFamily: AppStyles.fontFamily.regularFont,
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    opacity: 0.78
  },
  textUserState: {
    fontFamily: AppStyles.fontFamily.regularFont,
    color: "rgba(74,144,226,1)",
    fontSize: 13,
    opacity: 0.78,
    marginTop: 5
  },
  speakerColor: {
    color: "rgba(126,211,33,1)",
  }
});