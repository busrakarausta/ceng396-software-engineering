import React, { Component } from "react";
import { Container, Tab, Tabs, ScrollableTab, Left, Header, Right, Button, Icon } from "native-base";
import { Text, TouchableOpacity , View} from 'react-native';
import ToDoScreen from "./ToDoScreen";
import InProgressScreen from "./InProgressScreen";
import CompletedScreen from "./CompletedScreen";
import { withTheme } from "react-native-elements";
export default class TaskScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container >

<Header>
          <Left>
            <Button transparent >
            <Icon name='back' />
            </Button>
          </Left>
         
          <Right>
            <Button transparent>
              <Icon name='home' />
            </Button>
          </Right>
        </Header>


        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="To Do">
            <ToDoScreen />
          </Tab>
          <Tab heading="In Progress">
            <InProgressScreen />
          </Tab>
          <Tab heading="Completed">
            <CompletedScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
