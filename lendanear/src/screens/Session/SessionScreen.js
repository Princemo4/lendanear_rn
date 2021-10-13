import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Image, 
  KeyboardAvoidingView,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { 
  JoinLoader,
  SessionDialog
} from '../../components'
import AppStyles from '../../AppStyles';
import Constants from '../../Constants';
import styles from './Styles';
import RtcEngine from 'react-native-agora';

export default class SessionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenState: 0, // 0: Joining, 1: Sessions
      permissionsGranted: Platform.OS === 'ios',
      peerIds: [],
      uid: '',
      token: null,
      channelName: 'TestChannel'
    };

    this.askPermission()
  }

  componentDidMount() {
    this.initAgora()
    // setTimeout(() => {
    //     this.setState({screenState: 1});
    // }, 3000);
  }

  askPermission = async () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple(
        [
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
        ]
      ).then(result => {
        if (
            result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted' && 
            result['android.permission.RECORD_AUDIO'] === 'granted') {
                this.setState({ permissionsGranted: true })
                this.startCall()
            } else {
                this.setState({ permissionsGranted: false })
            }
        })
    }
  };

  initAgora = async () => {
    const { AGORA_APP_ID } = Constants.Configs;
    console.log('AGORA_APP_ID = ', AGORA_APP_ID);
    this._engine = await RtcEngine.create(AGORA_APP_ID);
    await this._engine.disableVideo();

    this._engine.addListener('Warning', (warn) => {
      console.log('Warning', warn);
    });

    this._engine.addListener('Error', (err) => {
      console.log('Error', err);
    });

    this._engine.addListener('UserJoined', (uid, elapsed) => {
      console.log('UserJoined', uid, elapsed);
      // Get current peer IDs
      const { peerIds } = this.state;
      // If new user
      if (peerIds.indexOf(uid) === -1) {
        this.setState({
          // Add peer ID to state array
          peerIds: [...peerIds, uid],
        });
      }
    });

    this._engine.addListener('UserOffline', (uid, reason) => {
      console.log('UserOffline', uid, reason);
      const { peerIds } = this.state;
      this.setState({
        // Remove peer ID from state array
        peerIds: peerIds.filter((id) => id !== uid),
      });
    });

    // If Local user joins RTC channel
    this._engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
      console.log('JoinChannelSuccess', channel, uid, elapsed);
      // Set state variable to true
      this.setState({
        joinSucceed: true,
      });
    });

    this.startCall();
  };

  /**
   * @name startCall
   * @description Function to start the call
   */
  startCall = async () => {
    const { AGORA_TOKEN } = Constants.Configs;
    console.log('AGORA_TOKEN = ', AGORA_TOKEN);
    // Join Channel using null token and channel name
    await this._engine?.joinChannel(
      AGORA_TOKEN,
      this.state.channelName,
      null,
      0
    );
  };

  /**
   * @name endCall
   * @description Function to end the call
   */
   endCall = async () => {
    await this._engine?.leaveChannel();
    this.setState({ peerIds: [], joinSucceed: false });
  };

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