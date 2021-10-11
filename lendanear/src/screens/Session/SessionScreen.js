import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { 
  JoinLoader,
  SessionDialog
} from '../../components'
import AppStyles from '../../AppStyles';
import styles from './Styles';

export default class SessionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenState: 0, // 0: Joining, 1: Sessions
    };
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({screenState: 1});
    }, 3000);
  }

  render() {
    return (
      <View style={AppStyles.styleSet.flex1}>
        <View style={AppStyles.styleSet.bkgImageContainer}>
          <Image
            style={AppStyles.styleSet.bkgImage}
            source={AppStyles.imageSet.bkgMainGradient}/>
        </View>
        <KeyboardAvoidingView style={[
          AppStyles.styleSet.screenContainer, 
        ]}>
          <View style={styles.headerContainer}>
            <View style={styles.v2Column}>
              <Text style={styles.v2M}>V2M</Text>
              <View style={styles.logoUnderline}/>
            </View>
          </View>
          <View style={AppStyles.styleSet.flex1}>
            <View style={styles.headerDivider} />
            <View style={[AppStyles.styleSet.flex1, AppStyles.styleSet.alignItemCenter, AppStyles.styleSet.justifyCenter]}>
              {(this.state.screenState === 0) && (
                <JoinLoader/>
              )}
              {(this.state.screenState === 1) && (
                <SessionDialog/>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}