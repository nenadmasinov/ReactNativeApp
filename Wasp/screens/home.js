import React from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Home extends React.Component {
  render() {
    return (
        <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
            <Header style={styles.header}>
              <Left>
                <Button transparent>
                  <Icon name='menu' style={styles.icon} onPress={() => { this.props.navigation.openDrawer() }} />
                </Button>
              </Left>
              <Body>
                <Text style={styles.headerTitle}>Home</Text>
              </Body>
              <Right />
          </Header>
          <Content padder>
            <Text>Home Page</Text>
          </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor: '#fff'
  },
  header:{
    backgroundColor: "#33d9b2"
  },
  headerTitle: {
    color: "#fff"
  },
  icon:{
    color: "#fff"
  }
});
