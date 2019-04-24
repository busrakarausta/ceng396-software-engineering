import React, { Component } from "react";
import Dimensions from "Dimensions";
import { StyleSheet, KeyboardAvoidingView } from "react-native";

import UserInput from "./UserInput";

import usernameImg from "../images/username.png";
import passwordImg from "../images/password.png";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false
    };
    this.showPass = this.showPass.bind(this);
  }

  showPass() {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UserInput
          source={usernameImg}
          placeholder="Username"
          autoCapitalize={"none"}
          returnKeyType={"done"}
          autoCorrect={false}
        />
        <UserInput
          source={usernameImg}
          placeholder="Email"
          autoCapitalize={"none"}
          returnKeyType={"done"}
          autoCorrect={false}
        />
        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={"done"}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Confirm Password"
          returnKeyType={"done"}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    justifyContent: "space-between"
  }
});
