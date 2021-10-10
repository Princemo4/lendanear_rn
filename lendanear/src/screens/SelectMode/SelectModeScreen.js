import React, { Component } from 'react';
import { View, Image, Keyboard, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { LoadingIndicator, TextInput, Button, VentMode } from '../../components'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AppStyles from '../../AppStyles';
import styles from './Styles';

export default class SelectModeScreen extends Component {
  constructor(props) {
    super(props);

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
              <View style={styles.rect7}/>
            </View>
          </View>
          <View style={[AppStyles.styleSet.flex1, AppStyles.styleSet.alignItemCenter, AppStyles.styleSet.justifyCenter]}>
            <View style={[AppStyles.styleSet.alignItemCenter, AppStyles.styleSet.justifyCenter, {paddingBottom: 150}]}>
              <TouchableOpacity>
                <View style={styles.talkContainer}>
                  <Text style={styles.talkToSomeone}>TALK TO SOMEONE</Text>
                  <FontAwesomeIcon
                    name="microphone"
                    style={styles.iconMicro} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.listenContainer}>
                  <Text style={styles.listenToSomeone}>LISTEN</Text>
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
}