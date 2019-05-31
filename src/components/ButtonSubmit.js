import React, { Component } from "react";
import axios from "axios";
import {
  ACCESSTOKEN,
  CURRENT_ID,
  USER,
  AUTH,
  BASEURL
} from "../const/base_const";
import Dimensions from "Dimensions";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  View,
  AsyncStorage
} from "react-native";
import spinner from "../images/loading.gif";

const DEVICE_WIDTH = Dimensions.get("window").width;
const MARGIN = 40;

export default class ButtonSubmit extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      token: "",
      id: ""
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
    this._actionLogin = this._actionLogin.bind(this);
    this._actionSignup = this._actionSignup.bind(this);
  }

  _actionSignup() {
    const { email, password, username } = this.props;

    axios
      .post(BASEURL + USER, {
        username: username,
        password: password,
        email: email
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          token: response.data.token,
          id: response.data.user._id
        });
        this.runFunc();
      })
      .catch(error => {
        console.error("registerAction:", error);
      });
    console.log(username);
  }
  _storeData = async (name, value) => {
    try {
      const taken = await AsyncStorage.setItem(name, value);
    } catch (error) {
      console.error(error);
    }
  };

  async runFunc() {
    if (this.state.token != null) {
      console.log(this.state.token);
      await this._storeData(ACCESSTOKEN, this.state.token);
      await this._storeData(CURRENT_ID, this.state.id);
      this.props.onPress();
    } else alert("There was a mistake");
  }

  _actionLogin() {
    const { email, password } = this.props;
    try {
      axios
        .post(BASEURL + AUTH, {
          email: email,
          password: password
        })
        .then(response => {
          this.setState({
            token: response.data.token,
            id: response.data.user._id
          });
          console.log("state:", this.state.token);
          this.runFunc();
        })
        .catch(error => {
          alert(error);
        });
    } catch (error) {
      alert("Something went wrong");
    }
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

    return;
  }
  _navigateTo = () => {
    if (this.props.username == null) this._actionLogin();
    else if (this.props.username != null) this._actionSignup();
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
