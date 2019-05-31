import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
import { Icon } from "native-base";
import axios from "axios";
import { TASK, DELETE, BASEURL } from "../../const/base_const";

export default class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 1, token: "" };
  }

  delete() {
    axios
      .delete(
        BASEURL + TASK + DELETE + this.props.id,
        {},
        {
          headers: { Authorization: this.state.token }
        }
      )
      .then(response => {
        console.log(response.data);
        alert(response.data);
      })
      .catch(error => {
        console.error("Creation Error:", error);
      });
  }
  changeProgress() {
    console.log(this.state.status);
    axios
      .put(
        BASEURL + TASK + this.props.id,
        {
          status: this.state.status
        },
        {
          headers: { Authorization: this.state.token }
        }
      )
      .then(response => {
        console.log(response.data);
        alert(response.data.message);
      })
      .catch(error => {
        console.error("Creation Error:", error);
      });
  }
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(ACCESSTOKEN);
      this.setState({ token: value });
    } catch (error) {
      // Error retrieving data
    }
  };
  _getProjects = async () => {
    try {
      await this._retrieveData();
    } catch (error) {}
  };
  async componentWillMount() {
    await this._getProjects();
    const inProgress = "In Progress";
    const done = "Done";
    console.log(this.props.option);
    if (this.props.option === done) this.setState({ status: 3 });
    else if (this.props.option === inProgress) {
      this.setState({ status: 2 });
      console.log(this.state.status);
    }
  }
  render() {
    return (
      <Menu>
        <MenuTrigger>
          <Icon type="MaterialCommunityIcons" name="dots-horizontal" />
        </MenuTrigger>
        <MenuOptions>
          {this.props.option ? (
            <MenuOption
              onSelect={() => this.changeProgress()}
              value={1}
              text={this.props.option}
            />
          ) : null}
          <MenuOption onSelect={() => this.delete()} value={2} text="Delete" />
        </MenuOptions>
      </Menu>
    );
  }
}
