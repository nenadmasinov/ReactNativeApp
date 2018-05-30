import React from 'react';
import { StyleSheet, Image, View, StatusBar } from 'react-native';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image source={require('../../img/wasp.png')} />
      </View>
    );
  }

  componentDidMount(){
      setTimeout(function () {
        alert('5 seconds after mount');
      }, 1500);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
