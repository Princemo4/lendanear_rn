import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { IMLocalized } from '../../core/localization/IMLocalization';
import AppStyles from '../../AppStyles';
import styles from './Styles';
import SessionUserItem from '../SessionUserItem/SessionUserItem';
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { zeroPad } from '../../core/helpers/statics';

export default function SessionDialog(props) {
  const users = props.data
  var userListComps = [];
  for(let user of users) {
    userListComps.push(
      <SessionUserItem
        key={user._id}
        userName={`${user.firstName ?? ''} ${user.lastName ?? ''}`}
        userState={'speaking'}/>
    );
  }

  const seconds = props.seconds ?? 0;
  const nMin = Math.floor(seconds / 60);
  const nSec = seconds % 60;
  const strTime = zeroPad(nMin, 2) + ':' + zeroPad(nSec, 2);
  return (
      <View style={styles.container}>
        <View style={AppStyles.styleSet.bkgImageContainer}>
          <Image
            style={AppStyles.styleSet.bkgImage}
            source={AppStyles.imageSet.bkgSessionDialog}/>
        </View>
        <View style={AppStyles.styleSet.fullWidth}>
          <Text style={styles.voiceSessionActive}>
            {IMLocalized('Voice Session Active')}
          </Text>
          <Text style={styles.voiceSessionTime}>
            {strTime}
          </Text>
          <View style={styles.userList}>
            <View style={styles.listHeader}>
              <Text style={styles.listHeaderText}>
                {IMLocalized('Active Participants')}
              </Text>
            </View>
            <ScrollView contentContainerStyle={styles.userListScroll}>
              { userListComps }
            </ScrollView>
          </View>
          <View style={[AppStyles.styleSet.fullWidth, AppStyles.styleSet.alignItemCenter]}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.sessionButton}
                onPress={()=> props.onPressMute?.()}
              >
                <MaterialCommunityIconsIcon
                  name="microphone-off"
                  style={styles.iconMute}
                />
                <Text style={styles.leaveSession}>{ IMLocalized('Mute') }</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.sessionButton}
                onPress={()=> props.onPressLeave?.()}
              >
                <FeatherIcon name="x-circle" style={styles.iconLeave}/>
                <Text style={styles.leaveSession}>{ IMLocalized('Leave Session') }</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
  );
}