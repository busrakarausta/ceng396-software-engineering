import React, { Component } from "react";
import { Container, Header, Tab, Tabs, ScrollableTab } from "native-base";
import ToDoScreen from "./ToDoScreen";
import InProgressScreen from "./InProgressScreen";
import CompletedScreen from "./CompletedScreen";
export default class TaskScreens extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "orange" }}>
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
