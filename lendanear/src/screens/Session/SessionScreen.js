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
import {
  GetAgoraToken
} from '../../core/network/RestAPI';

export default class SessionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      permissionsGranted: Platform.OS === 'ios',
      peerIds: [],
      uid: 100,
      isMute: false,
      token: null,
      channelName: 'TestChannel',
    };

    this.askPermission()
  }

  componentDidMount() {
    this.initAgora()
    this.getTokenAndUid()
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
  };

  /**
   * @name getTokenAndUid
   * @description Function to get agora token and uid for given channel name
   */
  getTokenAndUid = async() => {
    
    let result = await GetAgoraToken(this.state.channelName);
    console.log('api result = ', result);
    if (result.success) {
      let apiData = result.data;
      this.setState({
        token: apiData.token,
        // uid: apiData.uid,
      }, this.startCall);
    }
  }

  /**
   * @name startCall
   * @description Function to start the call
   */
  startCall = async () => {
    /* With Temp Token */
    // const { AGORA_TOKEN } = Constants.Configs;
    // console.log('AGORA_TOKEN = ', AGORA_TOKEN);
    // // Join Channel using null token and channel name
    // 
    // await this._engine?.joinChannel(
    //   AGORA_TOKEN,
    //   this.state.channelName,
    //   null,
    //   0
    // );
    console.log('Join Channel With ', this.state.token, this.state.channelName, this.state.uid);
    await this._engine?.joinChannel(
      this.state.token,
      this.state.channelName,
      null,
      this.state.uid
    );
  };

  /**
   * @name endCall
   * @description Function to end the call
   */
   endCall = async () => {
    await this._engine?.leaveChannel();
    this.setState({ peerIds: [], joinSucceed: false }, this.goBack);
  };

  goBack = () => {
    this.props.navigation.navigate('Login')
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
              {(!this.state.joinSucceed) && (
                <JoinLoader/>
              )}
              {(this.state.joinSucceed) && (
                <SessionDialog
                  onPressMute={()=> this.onPressSessionMute()}
                  onPressLeave={()=> this.onPressSessionLeave()}/>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }

  onPressSessionMute = () => {
    this.state({isMute: !this.state.isMute}, this.updateAudioState);
  }

  updateAudioState = () => {
    if (this.state.isMute) {
      this._engine.disableAudio();
    } else {
      this._engine.enableAudio();
    }
  }

  onPressSessionLeave = () => {
    console.log('onPressSessionLeave')
    this.endCall();
  }
}