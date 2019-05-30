import React, { Component } from "react";
import {
  Dimensions,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import {
  Button,
  Icon,
  Header,
  Body,
  Left,
  Container,
  Card,
  CardItem,
  Content,
  Text
} from "native-base";
import { Font, AppLoading } from "expo";
import TaskCard from "../components/TaskCard";

export default class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, task: props.navigation.state.params.task };
  }
  render() {
    let { width } = Dimensions.get("window");
    width = width * 0.9;

    return (
      <Container>
        <Header
          style={{ justifyContent: "flex-start", backgroundColor: "orange" }}
        >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Discover")}
            >
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              TASK DETAILS
            </Text>
          </Body>
        </Header>

        <Content>
          <Card>
            <CardItem header bordered>
              <Text style={{ color: "#565656" }}>TASK NAME</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={{ color: "#565656", fontWeight: "bold" }}>
                  Deadline:
                  <Text style={{ color: "red", fontWeight: "normal" }}>
                    31/05/2019
                  </Text>
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>

        <View style={{ alignSelf: "flex-end", marginBottom: 6 }}>
          <TouchableOpacity>
            <Image source={require("../images/addIcon.png")} />
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
