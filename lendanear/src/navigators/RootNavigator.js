import { createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/Login/LoginScreen';
import SignupScreen from '../screens/Signup/SignupScreen';
/**
 * Root Switch Navigator
 */
export const RootNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: 'Login',
  },
);

export default RootNavigator;
