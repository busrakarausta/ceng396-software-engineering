import React, { Component } from "react";
import { Button, Header, Left, Body, Icon, Right } from "native-base";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { CalendarPicker } from "react-native-calendar-picker";
import Calendar from "../components/Calendar";
export default class UserProfile extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ backgroundColor: "#fff8f2", flex: 1 }}>
        <Header style={{ backgroundColor: "orange" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Discover")}
            >
              <Icon name="md-arrow-round-back" />
            </Button>
          </Left>
          <Right>
            <Button
              transparent
              onPress={() => (
                <Calendar> </Calendar>
              )} /*this.props.navigation.navigate("Calendar")*/
            >
              <Icon name="md-calendar" />
            </Button>
          </Right>
          <Body>
            <Text style={{ fontSize: 22, color: "white" }}> My Profile </Text>
          </Body>
        </Header>
        <View style={{ marginTop: 60 }}>
          ./images/pp.jpg")} />
          <Text style={styles.name}> Nuran Şanlısoy</Text>
          <Text style={styles.uname}> @nuransanlisoy</Text>
          <Text style={styles.friends}> Friends:</Text>
          <View style={{ flexDirection: "row", marginLeft: 100 }}>
            <Image
              style={styles.friendsImage}
              source={require("../images/pp1.jpg")}
            />
            <Image
              style={styles.friendsImage}
              source={require("../images/pp2.jpg")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  img: {
    marginTop: 50,
    height: 120,
    width: 120,
    marginLeft: 130,
    borderWidth: 3,
    borderColor: "rgba(243,191,144,1)",
    borderRadius: 30
  },
  name: {
    color: "orange",
    fontSize: 22,
    marginLeft: 100,
    marginTop: 12
  },
  uname: {
    color: "gray",
    fontSize: 16,
    marginLeft: 115,
    marginTop: 4
  },
  friends: {
    color: "#706d6a",
    fontSize: 18,
    marginLeft: 90,
    marginTop: 40,
    fontWeight: "bold",
    marginLeft: 100
  },
  friendsImage: {
    marginTop: 15,
    height: 50,
    width: 50,
    borderWidth: 3,
    borderColor: "rgba(243,191,144,1)",
    borderRadius: 30,
    marginLeft: 10
  }
};
