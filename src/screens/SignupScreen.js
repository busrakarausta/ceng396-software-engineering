import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "../components/Logo";
import SignupForm from "../components/SignupForm";
import Wallpaper from "../components/Wallpaper";
import ButtonSubmit from "../components/ButtonSubmit";
import SignupSection from "../components/SignupSection";

export default class SignupScreen extends Component {
  constructor() {
    super();
    this.handler_email = this.handler_email.bind(this);
    this.handler_pass = this.handler_pass.bind(this);
    this.handler_username = this.handler_username.bind(this);
    this.handler_confirmpass = this.handler_confirmpass.bind(this);
    this.state = {
      email: "",
      password: "",
      username: "",
      confirm: "",
      validate: false
    };
  }
  static navigationOptions = {
    header: null
  };
  _validation;
  handler_email(email) {
    this.setState({
      email: email
    });
  }
  handler_username(username) {
    this.setState({
      username: username
    });
  }
  handler_pass(password) {
    this.setState({
      password: password
    });
  }
  handler_confirmpass(confirm) {
    this.setState({
      confirm: confirm
    });
    if (this.state.confirm == this.state.password) this.state.validate = true;
    else this.state.validate = false;
  }
  render() {
    return (
      <Wallpaper>
        <Logo />
        <SignupForm
          handler_username={this.handler_username}
          handler_email={this.handler_email}
          handler_pass={this.handler_pass}
          handler_confirmpass={this.handler_confirmpass}
        />
        <ButtonSubmit
          Text="SIGN UP"
          username={this.state.username}
          email={this.state.email}
          password={this.state.password}
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <SignupSection
          onPress={() => this.props.navigation.navigate("Login")}
          TextFirst="Already have an acount?"
        />
      </Wallpaper>
    );
  }
}
