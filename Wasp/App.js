import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
//import { Asset, AppLoading } from 'expo';
//import RootNavigator from './screens/routes'
import Splash from './screens/splash'
import Login from './screens/login'
import Home from './screens/home'

export default class App extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       isReady: false,
       userExists: false
     };
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

  render() {
    if (!this.state.isReady) {
      return <Splash />;
    }

    if(this.state.userExists)
      return <Home />

    return <Login />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
