import React, { Component } from 'react';
import { View, Image, Keyboard, Text, TouchableOpacity, BackHandler, KeyboardAvoidingView } from 'react-native';
import { LoadingIndicator, TextInput, Button } from '../../components'
import { IMLocalized } from '../../core/localization/IMLocalization';
import { showAlertDialog } from '../../core/helpers/statics';
import Constants from '../../Constants';
import AppStyles from '../../AppStyles';
import styles from './Styles';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyboardShown: false,
      loading: false,
      email: '',
      name: '',
      pwd: '',
    };
  }
  componentWillUnmount() {
    this.keyboardShowListener?.remove();
    this.keyboardHideListener?.remove();
  }

  componentDidMount() {
    // Register back handler when component is mounted
    this.register_back_handler();

    this.keyboardShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentWillUnmount() {
    // Remove back handler when component is unmounted
    this.unregister_back_handler();
  }

  _keyboardDidShow = () => {
    this.setState({ keyboardShown: true });
  };

  _keyboardDidHide = () => {
    this.setState({ keyboardShown: false });
  };

  render() {
    return (
      <View style={AppStyles.styleSet.flex1}>
        <View style={AppStyles.styleSet.bkgImageContainer}>
          <Image
            style={AppStyles.styleSet.bkgImage}
            source={AppStyles.imageSet.bkgMainGradient}/>
        </View>
        <View style={[
          AppStyles.styleSet.screenContainer, 
          AppStyles.styleSet.alignItemCenter,
          AppStyles.styleSet.justifyCenter,
          styles.container,
        ]}>
          <View style={styles.content}>
            <View style={styles.inputForm}>
              <TextInput
                style={[AppStyles.styleSet.fullWidth, styles.marginVerticalInputs]}
                placeholder={IMLocalized('Name')}
                icon={'user'}
                onChangeText={text => {
                  this.setState({ name: text });
                }}
                value={this.state.name}
              />
              <TextInput
                style={[AppStyles.styleSet.fullWidth, styles.marginVerticalInputs]}
                placeholder={IMLocalized('Email')}
                icon={'envelope'}
                secureEntry={true}
                onChangeText={text => {
                  this.setState({ email: text });
                }}
                value={this.state.email}
              />
              <TextInput
                style={[AppStyles.styleSet.fullWidth, styles.marginVerticalInputs]}
                placeholder={IMLocalized('Password')}
                icon={'lock'}
                secureEntry={true}
                onChangeText={text => {
                  this.setState({ pwd: text });
                }}
                value={this.state.pwd}
              />
              <Button
                style={[styles.marginVerticalInputs]}
                title={IMLocalized('Continue')}
                type={'outlined'}
                borderColor={'white'}
                onPress={()=> this.onLoginPressed()}/>
            </View>
          </View>
          {(!this.state.keyboardShown) && (
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                onPress={() => console.log('TOS')}
                style={styles.TOSButton}
              >
                <Text style={styles.TOSText}>{IMLocalized('TOS')}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {this.state.loading && (
          <LoadingIndicator/>
        )}
      </View>
    )
  }

  register_back_handler = () => {
    this.back_handler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        this.onBackPressed();
        return true;
      },
    );
  };

  unregister_back_handler = () => {    
    if (this.back_handler) {
      this.back_handler.remove();
    }
  };

  checkInputValidation = () => {
    if (this.state.email === '') {
      showAlertDialog(IMLocalized('MsgReqEmail'));
      return false;
    }

    if (this.state.pwd === '') {
      showAlertDialog(IMLocalized('MsgReqPwd'));
      return false;
    }

    if (!Constants.regEx.email.test(this.state.email)) {
      showAlertDialog(IMLocalized('MsgInvalidEmail'));
      return false;
    }
    
    if (this.state.pwd.length < 6) {
      showAlertDialog(IMLocalized('MsgPwdLess6'));
      return false;
    }

    return true;
  }

  onLoginPressed = () => {
    if (!this.checkInputValidation()) {
      return;
    }

    this.setState({loading: true}, this.login);
  }

  onBackPressed = () => {
    this.props.navigation.navigate('Login');
  }
}