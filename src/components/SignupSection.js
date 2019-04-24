import React, { Component } from "react";
import Dimensions from "Dimensions";
import { StyleSheet, View, Text } from "react-native";

export default class SignupSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.TextFirst}</Text>
        <Text style={styles.text}>{this.props.TextSecond}</Text>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 5,
    width: DEVICE_WIDTH,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between"
  },
  text: {
    color: "white",
    backgroundColor: "transparent"
  }
});
