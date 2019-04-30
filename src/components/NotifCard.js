import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export default class NotifCard extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 20,
          margin: 5
        }}
      >
        <Image
          source={this.props.src}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
        <View
          style={{
            backgroundColor: "rgba(243,191,144,0.25)",
            marginLeft: 35,
            padding: 15,
            borderRadius: 10
          }}
        >
          <Text>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}
