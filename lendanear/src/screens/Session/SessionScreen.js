import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  PermissionsAndroid,
  Platform,
  Alert
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
  GetAgoraToken,
  GetUserFromAgoraId,
} from '../../core/network/RestAPI';

export default class SessionScreen extends Component {
  constructor(props) {
    super(props);

    const userData = props.navigation.getParam('user');
    const mode = props.navigation.getParam('mode');

    this.state = {
      permissionsGranted: Platform.OS === 'ios',
      peerIds: [],
      agoraUid: userData.agoraUid,
      isMute: false,
      token: null,
      // fromMo, token: '006b0128a40c78c4a608d6f52d4645c9133IAANZU76zcM+PHaxyD5gYLWpK5v1QqPnFLrSoF/sOY57RaHYMoVCsDk/IgCfEH5VrdNuYQQAAQA9kG1hAgA9kG1hAwA9kG1hBAA9kG1h',
      //tempToken, token: '006b0128a40c78c4a608d6f52d4645c9133IAACAPEsoSIEoIDRkz/6rIrpU4qYdKJ6OtLt3epxWOfb5aHYMoUAAAAAEAAPz4g6UM5uYQEAAQBQzm5h',//null,
      // channelName: userData._id,
      channelName: 'TestChannel',
      users: [userData],
      timer: 0,
    };

    this.interval = null;
    this.askPermission()
  }

  componentDidMount() {
    this.initAgora()
  }

  componentWillUnmount() {
    this.stopTimeCount();
  }

   createAlert = (msg) => {
    Alert.alert(
      "here is a message",
      msg,
      [{text: "OK"}]
    )
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
    this._engine = await RtcEngine.create(AGORA_APP_ID);
    await this._engine.disableVideo();

    this._engine.addListener('Warning', (warn) => {
      console.log('Warning', warn);
    });

    this._engine.addListener('Error', (err) => {
      console.log('Error', err);
    });

    this._engine.addListener('UserJoined', (agoraUid, elapsed) => {
      console.log('UserJoined', agoraUid, elapsed);
      // Get current peer IDs
      const { peerIds } = this.state;
      // If new user
      if (agoraUid != this.state.agoraUid) {
        if (peerIds.indexOf(agoraUid) === -1) {
          this.setState({
            // Add peer ID to state array
            peerIds: [...peerIds, agoraUid],
          });

          this.appendPeerDetails(agoraUid);
        }
      }
    });

    this._engine.addListener('UserOffline', (agoraUid, reason) => {
      console.log('UserOffline', agoraUid, reason);
      const { peerIds } = this.state;
      this.setState({
        // Remove peer ID from state array
        peerIds: peerIds.filter((id) => id !== agoraUid),
      });
    });

    // If Local user joins RTC channel
    this._engine.addListener('JoinChannelSuccess', (channel, agoraUid, elapsed) => {
      let msg = ['JoinChannelSuccess', channel, agoraUid, elapsed];
      this.state.channelDetails = {
        channel: channel,
        agoraUid: agoraUid
      }
      this.createAlert(msg.toString())
      // Set state variable to true
      this.setState({
        joinSucceed: true,
      }, this.startTimeCount);
    });

    // this.startCall();
    this.getAgoraToken();
  };

  appendPeerDetails = async(agoraUid) => {
    console.log('getUserDetails ', agoraUid)
    this.setState({loading: true});
    let result = await GetUserFromAgoraId(agoraUid);
    console.log('result = ', result);

    if (result.success) {
      this.setState({
        loading: false,
        // Add peer ID to state array
        users: [...users, result.data],
      });
    } else {
      this.setState({loading: false});
    }
  }

  /**
   * @name getTokenAndUid
   * @description Function to get agora token and agoraUid for given channel name
   */
  getAgoraToken = async() => {
    let result = await GetAgoraToken(this.state.channelName, this.state.agoraUid);
    console.log('getAgoraToken result = ', result);
    if (result.success && result.data.rtcToken)  {
      this.setState({
        token: result.data.rtcToken,
      }, this.startCall);
    }
  }

  /**
   * @name startCall
   * @description Function to start the call
   */
  startCall = async () => {
    console.log('Join Channel With ', this.state.token, this.state.channelName, this.state.agoraUid);
    await this._engine?.joinChannel(
      this.state.token,
      this.state.channelName,
      null,
      this.state.agoraUid
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

  startTimeCount = () => {
    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer + 1 })),
      1000
    );
  }

  stopTimeCount = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  goBack = () => {
    this.props.navigation.navigate('SelectMode')
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
                  data={this.state.users}
                  seconds={this.state.timer}
                  channel={this.state.channelDetails.channel}
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
