import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { systemWeights } from "react-native-typography";

import bgSrc from "../images/pp.jpg";

export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          top: 0,
          backgroundColor: "white",
          width: "100%",
          height: "25%",
          justifyContent: "space-between"
        }}
      >
        <View
          style={{
            padding: 15,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Ionicons name="ios-menu" size={32} color="black" />
          <Image
            source={bgSrc}
            style={{
              width: 40,
              height: 40,
              padding: 5,
              borderWidth: 3,
              borderColor: "rgba(243,191,144,1)",
              borderRadius: 20
            }}
          />
        </View>
        <Text
          style={{
            ...systemWeights.light,
            margin: 10,
            fontSize: 40
          }}
        >
          Discover
        </Text>
      </View>
    );
  }
}
