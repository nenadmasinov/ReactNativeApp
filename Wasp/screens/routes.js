import { createStackNavigator } from 'react-navigation';
import Splash from '../screens/splash'
import Login from '../screens/login'

const RootNavigator = createStackNavigator({
    Splash: {
      screen: Splash
    },
    Login: {
      screen: Login
    }
  },
    {
    initialRouteName: 'Splash'
  });

export default RootNavigator;
