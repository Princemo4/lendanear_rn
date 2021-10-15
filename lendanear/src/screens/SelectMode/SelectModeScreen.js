import React, { Component } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AppStyles from '../../AppStyles';
import { IMLocalized } from '../../core/localization/IMLocalization';
import styles from './Styles';

export default class SelectModeScreen extends Component {
  constructor(props) {
    super(props);
    const userData = props.navigation.getParam('user');

    this.state = {
    };
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
              <TouchableOpacity
                onPress={()=> this.onTalkSomeone()}>
                <View style={styles.talkContainer}>
                  <Text style={styles.talkToSomeone}>{ IMLocalized('TALK TO SOMEONE') }</Text>
                  <FontAwesomeIcon
                    name="microphone"
                    style={styles.iconMicro} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=> this.onListenSomeone()}>
                <View style={styles.listenContainer}>
                  <Text style={styles.listenToSomeone}>{ IMLocalized('LISTEN') }</Text>
                  <FontAwesomeIcon
                    name="assistive-listening-systems"
                    style={styles.iconListening}
                  ></FontAwesomeIcon>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }

  onTalkSomeone = () => {
    this.props.navigation.navigate('Session', {
      user: this.userData,
      mode: 'talk'
    });
  }

  onListenSomeone = () => {
    this.props.navigation.navigate('SelectMode', {
      user: this.userData,
      mode: 'listen'
    });
  }
}