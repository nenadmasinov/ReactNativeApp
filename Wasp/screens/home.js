import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Home extends React.Component {
  render() {
    return (
        <Container>
            <Header>
              <Left>
                <Button transparent>
                  <Icon name='menu' onPress={() => { this.props.navigation.openDrawer() }} />
                </Button>
              </Left>
              <Body>
                <Text>Header</Text>
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
  icon: {
    width: 24,
    height: 24
  }
});
