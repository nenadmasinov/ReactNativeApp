import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../img/home.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };

  constructor(props) {
     super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="green"
                   barStyle="dark-content"
                   translucent={true}
                   hidden={false} />
        <Text>Home Page</Text>
        <Button title="toggle view"
                onPress={() => { this.props.navigation.toggleDrawer() }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  icon: {
    width: 24,
    height: 24
  }
});
