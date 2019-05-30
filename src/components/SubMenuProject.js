import React, { Component } from "react";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
import { Icon } from "native-base";
import axios from "axios";
import { PROJECT, DELETE, BASEURL, TASK } from "../const/base_const";

export default class SubMenuProject extends Component {
  constructor(props) {
    super(props);
    this.changeProgress = this.changeProgress.bind(this);
    this.state = { status: 1, token: "", option: "" };
  }

  delete() {
    axios
      .delete(
        BASEURL + PROJECT + DELETE + this.props.id,
        {},
        {
          headers: { Authorization: this.state.token }
        }
      )
      .then(response => {
        axios
          .delete(
            BASEURL + TASK + DELETE + "all/" + this.props.id,
            {},
            {
              headers: { Authorization: this.state.token }
            }
          )
          .then(response => {
            console.log(response.data.message);
            alert(response.data.message);
            this.props.navigation.goBack();
          })
          .catch(error => {
            console.error("Delete Error:", error);
          });
      })
      .catch(error => {
        console.error("Delete Error:", error);
      });
  }
  changeProgress() {
    axios
      .put(
        BASEURL + PROJECT + this.props.id,
        {
          status: 2
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
    this._getProjects();
    if (this.props.status === 1) this.setState({ option: "Done" });
  }
  render() {
    return (
      <Menu>
        <MenuTrigger>
          <Icon type="MaterialCommunityIcons" name="dots-horizontal" />
        </MenuTrigger>
        <MenuOptions>
          {this.state.option ? (
            <MenuOption
              onSelect={() => this.changeProgress()}
              value={1}
              text={this.state.option}
            />
          ) : null}
          <MenuOption onSelect={() => this.delete()} value={2} text="Delete" />
        </MenuOptions>
      </Menu>
    );
  }
}
