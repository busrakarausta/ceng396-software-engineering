import React, { Component } from "react";
import { View } from "react-native";
import TabBar from "@mindinventory/react-native-tab-bar-interaction";
import StaticBar from "./StaticBar";

export default class BottomBar extends Component {
  render() {
    return (
      <StaticBar>
        <TabBar.Item
          selectedIcon={require("../../images/add.png")}
          title="Doing"
        >
          <View>{/*Page Content*/}</View>
        </TabBar.Item>
        <TabBar.Item
          selectedIcon={require("../../images/add.png")}
          title="Discover"
        >
          <View>{/*Page Content*/}</View>
        </TabBar.Item>
        <TabBar.Item
          selectedIcon={require("../../images/add.png")}
          title="Done"
        >
          <View>{/*Page Content*/}</View>
        </TabBar.Item>
      </StaticBar>
    );
  }
}
