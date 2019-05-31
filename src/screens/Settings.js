import React, { Component } from "react";
import { TouchableOpacity, AsyncStorage } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch
} from "native-base";
import { ACCESSTOKEN, CURRENT_ID } from "../const/base_const";

export default class Settings extends Component {
  state = { switchValue: false };

  toggleSwitch = value => {
    this.setState({ switchValue: value });
  };

  static navigationOptions = {
    header: null
  };
  async _logout() {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "orange" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Discover")}
            >
              <Icon name="md-arrow-round-back" />
            </Button>
          </Left>
          <Body>
            <Text style={{ fontSize: 22, color: "white" }}> Settings </Text>
          </Body>
        </Header>

        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#877a69" }}>
                <Icon active name="md-notifications" />
              </Button>
            </Left>
            <Body>
              <Text style={{ fontSize: 20 }}>Notifications</Text>
            </Body>
            <Right>
              <Switch
                onValueChange={this.toggleSwitch}
                value={this.state.switchValue}
              />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#877a69" }}>
                <Icon active name="md-log-out" />
              </Button>
            </Left>
            <Body>
              <TouchableOpacity onPress={() => this._logout()}>
                <Text style={{ fontSize: 20 }}>Log Out</Text>
              </TouchableOpacity>
            </Body>
            <Right />
          </ListItem>
        </Content>
      </Container>
    );
  }
}
