import React, { Component } from "react";
import { View, Image, Text, Platform, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { systemWeights } from "react-native-typography";

import bgSrc from "../images/pp.jpg";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          top: 0,
          backgroundColor: "white",
          ...Platform.select({
            ios: {
              shadowRadius: 2,
              shadowOpacity: 0.7,
              shadowColor: "rgba(247, 231, 215,0.9)",
              shadowOffset: { width: 2, height: 1 }
            },
            android: { elevation: 1 }
          }),
          width: "100%",
          height: "20%",
          justifyContent: "space-between"
        }}
      >
        <View
          style={{
            marginTop: 10,
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <MaterialIcons name="menu" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Image
              source={bgSrc}
              style={{
                width: 40,
                height: 40,
                padding: 15,
                borderWidth: 3,
                borderColor: "rgba(243,191,144,1)",
                borderRadius: 20
              }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            ...systemWeights.light,
            margin: 10,
            marginTop: 0,
            fontSize: 30
          }}
        >
          {this.props.title}
        </Text>
      </View>
    );
  }
}
