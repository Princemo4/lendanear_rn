import React, { Component } from 'react';
import { View, Image, Keyboard, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
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
      pwd: '',
    };
  }

  componentWillUnmount() {
    this.keyboardShowListener?.remove();
    this.keyboardHideListener?.remove();
  }

  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
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
        <KeyboardAvoidingView style={[
          AppStyles.styleSet.screenContainer, 
          styles.container,
        ]}>
          <View>
            <View style={styles.v2MColumn}>
              <Text style={styles.v2M}>V2M</Text>
              <View style={styles.rect7}/>
            </View>
            <View style={styles.inputForm}>
              <TextInput
                style={[AppStyles.styleSet.fullWidth, styles.marginVerticalInputs]}
                placeholder={IMLocalized('Email')}
                icon={'envelope'}
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
                title={IMLocalized('LOGIN')}
                onPress={()=> this.onLoginPressed()}/>
            </View>
          </View>
          {(!this.state.keyboardShown) && (
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Signup')}
                style={styles.createAccountButton}
              >
                <Text style={styles.createAccountText}>{IMLocalized('Create Account')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log('Need Help')}
                style={styles.createAccountButton}
              >
                <Text style={styles.createAccountText}>{IMLocalized('Need Help?')}</Text>
              </TouchableOpacity>
            </View>
          )}
        </KeyboardAvoidingView>
        {this.state.loading && (
          <LoadingIndicator/>
        )}
      </View>
    )
  }

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
}