import React from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class News extends React.Component {
  render() {
    return (
        <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, backgroundColor: "#fff"}}>
            <Header style={styles.header}>
              <Left>
                <Button transparent>
                  <Icon name='menu' style={styles.icon} onPress={() => { this.props.navigation.openDrawer() }} />
                </Button>
              </Left>
              <Body>
                <Text style={styles.headerTitle}>News</Text>
              </Body>
              <Right />
          </Header>
          <Content padder>
            <Text>News Page</Text>
          </Content>
        </Container>
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
