import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#fff"
                 barStyle="dark-content" />
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
});
