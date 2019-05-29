import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import Wallpaper from "../components/Wallpaper";
import ButtonSubmit from "../components/ButtonSubmit";
import SignupSection from "../components/SignupSection";
import { ACCESSTOKEN } from "../const/base_const";

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.handler_email = this.handler_email.bind(this);
    this.handler_pass = this.handler_pass.bind(this);
    this.state = {
      email: "",
      password: "",
      token: ""
    };
  }
  /*_retrieveData = async name => {
    try {
      const value = await AsyncStorage.getItem(name);

      this.setState({ token: value });
      return value;
    } catch (error) {
      // Error retrieving data
    }
  };
  componentWillMount() {
    this._retrieveData(ACCESSTOKEN);
    console.log("token login", this.state.token);
    if (this.state.token) this.props.navigation.navigate("Home");
  }*/
  static navigationOptions = {
    header: null
  };
  handler_email(email) {
    this.setState({
      email: email
    });
  }
  handler_pass(password) {
    this.setState({
      password: password
    });
  }
  render() {
    return (
      <Wallpaper>
        <Logo />
        <LoginForm
          handler_email={this.handler_email}
          handler_pass={this.handler_pass}
        />
        <ButtonSubmit
          Text="LOGIN"
          email={this.state.email}
          password={this.state.password}
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <SignupSection
          onPress={() => this.props.navigation.navigate("Signup")}
          TextFirst="Create Account"
          TextSecond="Forget Password?"
        />
      </Wallpaper>
    );
  }
}
