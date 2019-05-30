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
      <Container style={{marginTop:5}}>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="To Do">
            <ToDoScreen projectID={this.props.projectId} />
          </Tab>
          <Tab heading="In Progress">
            <InProgressScreen projectID={this.props.projectId} />
          </Tab>
          <Tab heading="Completed">
            <CompletedScreen projectID={this.props.projectId} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
