import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class News extends React.Component {
  static navigationOptions = {
      drawerLabel: 'News',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../img/news.png')}
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
        <Text>News Page</Text>
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
  icon: {
    width: 24,
    height: 24
  }
});
