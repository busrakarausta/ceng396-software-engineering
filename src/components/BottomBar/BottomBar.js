import React, { Component } from "react";
import { View } from "react-native";
import TabBar from "@mindinventory/react-native-tab-bar-interaction";
import StaticBar from "./StaticBar";

export default class BottomBar extends Component {
  render() {
    return (
      <StaticBar navigation={this.props.navigation}>
        <StaticBar.Item
          selectedIcon={require("../../images/add.png")}
          title="Doing"
        />
        <StaticBar.Item
          selectedIcon={require("../../images/add.png")}
          title="Discover"
        />
        <StaticBar.Item
          selectedIcon={require("../../images/add.png")}
          title="Done"
        />
      </StaticBar>
    );
  }
}
