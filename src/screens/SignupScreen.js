import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "../components/Logo";
import SignupForm from "../components/SignupForm";
import Wallpaper from "../components/Wallpaper";
import ButtonSubmit from "../components/ButtonSubmit";
import SignupSection from "../components/SignupSection";

export default class SignupScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Wallpaper>
        <Logo />
        <SignupForm />
        <ButtonSubmit
          Text="SIGN UP"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <SignupSection TextFirst="Already have an acount?" />
      </Wallpaper>
    );
  }
}
