import React, { Component } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Pressable} from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AppStyles from '../../AppStyles';
import { IMLocalized } from '../../core/localization/IMLocalization';
import styles from './Styles';
import {GetGroupSessions} from '../../core/network/RestAPI'

export  class SelectChannelScreen extends Component {
  constructor(props) {
    super(props);
    this.userData = props.navigation.getParam('user');


    this.state = {
      groupChannels:  GetGroupSessions(this.userData.group)
    };
    console.log(this.state.groupChannels)
  }



  render() {
    return (
      <View style={AppStyles.styleSet.flex1}>
        <KeyboardAvoidingView style={[
          AppStyles.styleSet.screenContainer,
        ]}>
          <View style={styles.headerContainer}>
            <View style={styles.v2Column}>
              <Text style={styles.v2M}>V2M</Text>
              <View style={styles.logoUnderline}/>
            </View>
          </View>
          <View style={[AppStyles.styleSet.flex1, AppStyles.styleSet.alignItemCenter, AppStyles.styleSet.justifyCenter]}>
            <View style={[AppStyles.styleSet.alignItemCenter, AppStyles.styleSet.justifyCenter, {paddingBottom: 150}]}>
            <TouchableOpacity>
              <Text onPress={() => alert('Pressed')}>
              I am Here
              </Text>
            </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }


}
