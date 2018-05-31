import { createDrawerNavigator } from 'react-navigation';
import Home from '../screens/home'
import News from '../screens/news'

const RootNavigator = createDrawerNavigator({
    Home: { screen: Home },
    News: { screen: News }
  },
    {
      initialRouteName: 'Home'
  });

export default RootNavigator;
