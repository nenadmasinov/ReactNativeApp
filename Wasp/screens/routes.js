import { createStackNavigator } from 'react-navigation';
import Splash from '../screens/splash'
import Login from '../screens/login'

const RootNavigator = createStackNavigator({
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerTitle: "Login"
      }
    }
  },
    {
    initialRouteName: 'Splash'
  });

export default RootNavigator;
