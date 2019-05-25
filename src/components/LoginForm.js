import React, { Component } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";

import UserInput from "./UserInput";

import usernameImg from "../images/username.png";
import passwordImg from "../images/password.png";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      email: "",
      password: ""
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
          placeholder="Email"
          autoCapitalize={"none"}
          returnKeyType={"done"}
          onChangeText={email => this.props.handler_email(email)}
          autoCorrect={false}
        />
        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={"done"}
          autoCapitalize={"none"}
          onChangeText={password => this.props.handler_pass(password)}
          autoCorrect={false}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: "center"
  }
});
