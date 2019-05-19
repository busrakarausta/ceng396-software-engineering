import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ToDoCard extends Component {
  render() {
    const { deadline } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 5,
          margin: 5
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(243, 191, 144, 0.25)",
            marginLeft: 15,
            padding: 15,
            borderRadius: 10,
            borderRightWidth: 1,
            borderLeftWidth: 1,
            borderColor: "black"
          }}
        >
          <Text>{this.props.text}</Text>
          <Text style={{ textAlign: "right" }}> {"Deadline:" + deadline}</Text>
        </View>
      </View>
    );
  }
}
