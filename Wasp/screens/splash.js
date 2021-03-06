import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default class Splash extends React.Component {
  constructor(props) {
     super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/splash.png')}
               style={styles.splashImage}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 200,
    height: 200
  }
});
