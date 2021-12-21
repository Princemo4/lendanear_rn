import React, { Component } from 'react';
import { View, Text, Image, Switch, BackHandler, KeyboardAvoidingView } from 'react-native';
import AppStyles from '../../AppStyles';
import styles from './Styles';
import Svg, { Ellipse } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { IMLocalized } from '../../core/localization/IMLocalization';

export default class SettingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  
  componentDidMount() {
    this.register_back_handler();
  }

  componentWillUnmount() {
    this.unregister_back_handler();
  }

  register_back_handler = () => {
    this.back_handler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        this.props.navigation.navigate('SelectMode');
        return true;
      },
    );
  };

  unregister_back_handler = () => {    
    if (this.back_handler) {
      this.back_handler.remove();
    }
  };

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
          <View style={styles.svgBkgContainer}>
            <View style={styles.headerDivider} />
            <View style={styles.ellipseStack}>
              <Svg viewBox="0 0 859.43 890.3" style={styles.ellipse}>
                <Ellipse
                  strokeWidth={1}
                  fill="rgba(255,255,255,1)"
                  cx={430}
                  cy={445}
                  rx={429}
                  ry={445}
                ></Ellipse>
              </Svg>
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.setting}>
                {IMLocalized('SETTINGS')}
              </Text>
              <View style={styles.profileWrapper}>
                <View style={styles.imgContainer}>
                  <Image 
                    source={AppStyles.imageSet.imgUserTemp}
                    style={styles.profileImg}/>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.emailText}>
                    stan@stansmith.com
                  </Text>
                  <Text style={styles.username}>
                    Stan Smith
                  </Text>
                </View>
              </View> 
              <Text style={styles.settingTextSection}>
                {IMLocalized('Account Setting')}
              </Text>
              <View style={styles.settingItemContainer}>
                <Text style={styles.settingItemText}>
                {IMLocalized('Edit Profile')}
                </Text>
                <IoniconsIcon
                  name="chevron-forward-outline"
                  style={styles.iconForward}/>
              </View>
              <View style={styles.settingItemContainer}>
                <Text style={styles.settingItemText}>
                  {IMLocalized('Change Connections')}
                </Text>
                <IoniconsIcon
                  name="chevron-forward-outline"
                  style={styles.iconForward}/>
              </View>
              <View style={styles.settingItemContainer}>
                <Text style={styles.settingItemText}>
                  {IMLocalized('Edit provide settings')}
                </Text>
                <IoniconsIcon
                  name="chevron-forward-outline"
                  style={styles.iconForward}/>
              </View>
              <View style={styles.notificationContainer}>
                <Text style={styles.settingTextSection}>
                  {IMLocalized('Notifications')}
                </Text>
                <Switch/>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}