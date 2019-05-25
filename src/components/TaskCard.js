import React, { Component } from "react";
import { View } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import { Font, AppLoading } from "expo";
import SubMenu from "./TaskCards/SubMenu";
export default class TaskCard extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
      <Content style={{ width: "85%", alignSelf: "center" }}>
        <Card
          style={{
            alignItems: "center"
          }}
        >
          <CardItem
            cardBody
            style={{
              margin: 7
            }}
          >
            <Left>
              <Body>
                <Text note style={{ color: "blue" }}>
                  {this.props.name}
                </Text>
              </Body>
            </Left>
            <Right>
              <Body>
                <SubMenu option={this.props.option} />
              </Body>
            </Right>
          </CardItem>
          <CardItem cardBody style={{ width: "90%", height: "15%" }}>
            <Text note numberOfLines={2}>
              {this.props.desc}
            </Text>
          </CardItem>
          <CardItem
            cardBody
            style={{
              margin: 7
            }}
          >
            <Body style={{ margin: 7, flexDirection: "row" }}>
              <Button transparent>
                <Icon style={{ fontSize: 20 }} active name="thumbs-up" />
              </Button>

              <Button transparent>
                <Icon active style={{ fontSize: 20 }} name="chatbubbles" />
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
