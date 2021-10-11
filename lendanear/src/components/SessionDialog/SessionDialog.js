import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { IMLocalized } from '../../core/localization/IMLocalization';
import AppStyles from '../../AppStyles';
import styles from './Styles';
import SessionUserItem from '../SessionUserItem/SessionUserItem';
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function SessionDialog(props) {
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
            {'00:00'}
          </Text>
          <View style={styles.userList}>
            <View style={styles.listHeader}>
              <Text style={styles.listHeaderText}>
                {IMLocalized('Active Participants')}
              </Text>
            </View>
            <ScrollView contentContainerStyle={styles.userListScroll}>
              <SessionUserItem
                userName={'User1'}
                userState={'speaking'}/>
              <SessionUserItem
                userName={'User2'}
                userState={'listening'}/>
              <SessionUserItem
                userName={'User3'}
                userState={'listening'}/>
            </ScrollView>
          </View>
          <View style={[AppStyles.styleSet.fullWidth, AppStyles.styleSet.alignItemCenter]}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.sessionButton}>
                <MaterialCommunityIconsIcon
                  name="microphone-off"
                  style={styles.iconMute}
                />
                <Text style={styles.leaveSession}>{ IMLocalized('Mute') }</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sessionButton}>
                <FeatherIcon name="x-circle" style={styles.iconLeave}/>
                <Text style={styles.leaveSession}>{ IMLocalized('Leave Session') }</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
  );
}