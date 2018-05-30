import React from 'react';
import { StyleSheet, StatusBar, Image, View } from 'react-native';

export default class Splash extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image source={require('../img/wasp.png')} />
      </View>
    );
  }

  componentDidMount(){
      setTimeout(function () {
        this.props.navigation.navigate('Login');
      }, 3000);
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
