import React, { Component } from "react";
import { Container, Header, Tab, Tabs, ScrollableTab } from "native-base";
import ToDoScreen from "./src/screens/ToDoScreen";
import InProgressScreen from "./src/screens/InProgressScreen";
import CompletedScreen from "./src/screens/CompletedScreen";
export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
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
