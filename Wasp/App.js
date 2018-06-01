import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import { Font } from 'expo';
import RootNavigator from './screens/routes'
import Splash from './screens/splash'
import Login from './screens/login'

export default class App extends React.Component {
  constructor(props) {
     super(props);
     //AsyncStorage.clear();
     this.state = {
       isReady: false,
       userExists: false
     };
   }

   async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }

   componentDidMount() {
    setTimeout(async () => { await this.setupState() }, 1500);
  }

  async setupState() {
    try {
      let user = await AsyncStorage.getItem('user');
      if(user === null) {
        this.setState({ isReady: true, userExists: false });
      }
      else {
          let parse = JSON.parse(user);
          if(parse === null) {
            this.setState({ isReady: true, userExists: false });
          }
          else {
            this.setState({ isReady: true, userExists: true });
          }
      }
    } catch (error) {
        console.log(error);
    }
  }

  loginCallback = (isLoggedIn) => {
    this.setState({ isReady: true, userExists: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Splash />;
    }

    if(this.state.userExists)
      return <RootNavigator />

    return <Login userLoggedIn={this.loginCallback} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
