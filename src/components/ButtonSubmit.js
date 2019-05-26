import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Dimensions from "Dimensions";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  AsyncStorage,
  Easing,
  Image,
  Alert,
  View
} from "react-native";
import { SecureStore } from "expo";

import spinner from "../images/loading.gif";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const MARGIN = 40;

export default class ButtonSubmit extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
  }

  _actionSignup() {
    const { email, password, username } = this.props;

    axios
      .post("http://192.168.56.1:3000/user/", {
        username: username,
        password: password,
        email: email
      })
      .then(response => {
        console.log(response);
        SecureStore.setItemAsync("secure_token", response.data.token);
      })
      .catch(error => {
        console.error("registerAction:", error);
      });
    console.log(username);
  }

  _actionLogin() {
    const { email, password } = this.props;

    axios
      .post("http://192.168.0.28:3000/auth/", {
        email: email,
        password: password
      })
      .then(response => {
        SecureStore.setItemAsync("secure_token", response.data.token);
      })
      .catch(error => {
        console.error("loginAction:", error);
      });
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({ isLoading: true });
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }).start();

    setTimeout(() => {
      this._onGrow();
      this._navigateTo();
    }, 4000);
  }
  _navigateTo = () => {
    console.log(this.props.username);
    if (this.props.username == null) this._actionLogin();
    else if (this.props.username != null) this._actionSignup();
    this.props.onPress();
  };

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }).start();
  }

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN]
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN]
    });

    return (
      <View style={styles.container}>
        <Animated.View style={{ width: changeWidth }}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}
          >
            {this.state.isLoading ? (
              <Image source={spinner} style={styles.image} />
            ) : (
              <Text style={styles.text}>{this.props.Text}</Text>
            )}
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle, { transform: [{ scale: changeScale }] }]}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 10,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF5C6C",
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: "#FF5C6C",
    borderRadius: 100,
    alignSelf: "center",
    zIndex: 99,
    backgroundColor: "#FF5C6C"
  },
  text: {
    color: "white",
    backgroundColor: "transparent"
  },
  image: {
    width: 24,
    height: 24
  }
});
