import { createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/Login/LoginScreen';
import SignupScreen from '../screens/Signup/SignupScreen';
import SelectModeScreen from '../screens/SelectMode/SelectModeScreen';
/**
 * Root Switch Navigator
 */
export const RootNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    SelectMode: SelectModeScreen
  },
  {
    initialRouteName: 'Login',
  },
);

export default RootNavigator;
