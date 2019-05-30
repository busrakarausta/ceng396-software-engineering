import React, { Component } from "react";
import {
  Container,
  Tab,
  Tabs,
  ScrollableTab,
  Left,
  Header,
  Right,
  Button,
  Icon
} from "native-base";
import ToDoScreen from "./ToDoScreen";
import InProgressScreen from "./InProgressScreen";
import CompletedScreen from "./CompletedScreen";
export default class TaskScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "orange" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("ProjectDetail")}
            >
              <Icon name="md-arrow-round-back" />
            </Button>
          </Left>

          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Discover")}
            >
              <Icon name="home" />
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
