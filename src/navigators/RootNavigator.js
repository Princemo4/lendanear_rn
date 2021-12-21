import { createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/Login/LoginScreen';
import SignupScreen from '../screens/Signup/SignupScreen';
import SelectModeScreen from '../screens/SelectMode/SelectModeScreen';
import SettingScreen from '../screens/Setting/SettingScreen';
import SessionScreen from '../screens/Session/SessionScreen';
// import SelectChannelScreen from '../screens/SelectMode/SelectChannelScreen'
/**
 * Root Switch Navigator
 */
export const RootNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    SelectMode: SelectModeScreen,
    Setting: SettingScreen,
    Session: SessionScreen
  },
  {
    initialRouteName: 'Login',
  },
);

export default RootNavigator;
