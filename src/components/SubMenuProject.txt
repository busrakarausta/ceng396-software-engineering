import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
import { Icon } from "native-base";

export default class SubMenu extends Component {
  render() {
    return (
      <Menu onSelect={value => alert(`Selected number: ${value}`)}>
        <MenuTrigger>
          <Icon type="MaterialCommunityIcons" name="dots-horizontal" />
        </MenuTrigger>
        <MenuOptions>
          {this.props.option ? (
            <MenuOption value={1} text={this.props.option} />
          ) : null}
          <MenuOption value={2} text="Delete" />
        </MenuOptions>
      </Menu>
    );
  }
}
