import React, { Component } from "react";
import { Dimensions, View, Image, TouchableOpacity } from "react-native";
import {
  Button,
  Icon,
  Header,
  Body,
  Left,
  Right,
  Container,
  Card,
  CardItem,
  Content,
  Text
} from "native-base";
import { Font, AppLoading } from "expo";
import { MaterialIcons } from "@expo/vector-icons";
import TaskScreen from "./TaskScreen";
import SubMenuProject from "../components/SubMenuProject";

export default class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      project: props.navigation.state.params.project
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
    console.log(this.state.project);
  }

  static navigationOptions = {
    header: null
  };

  render() {
    let { width } = Dimensions.get("window");
    width = width * 0.9;
    if (this.state.loading) {
      return <AppLoading />;
    }

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
              PROJECT DETAILS
            </Text>
          </Body>
          <Right>
            <Body>
              <SubMenuProject
                navigation={() => this.props.navigation}
                id={this.state.project._id}
                status={this.state.project.status}
              />
            </Body>
            <Body>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("EditProject", {
                    project: this.state.project
                  })
                }
              >
                <MaterialIcons name="edit" size={25} />
              </TouchableOpacity>
            </Body>
          </Right>
        </Header>

        <Content>
          <Card>
            <CardItem header bordered>
              <Text style={{ color: "#565656" }}>
                {this.state.project.name}
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{this.state.project.desc}</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={{ color: "#565656", fontWeight: "bold" }}>
                  Deadline:
                  <Text style={{ color: "red", fontWeight: "normal" }}>
                    {this.state.project.dueDate.toString().substr(4, 12)}
                  </Text>
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>

        <TaskScreen
          style={{ marginTop: 15 }}
          projectId={this.state.project._id}
        />
        {this.state.project.status === 1 ? (
          <View style={{ alignSelf: "flex-end", marginBottom: 6 }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("CreateTask", {
                  project_id: this.state.project._id
                })
              }
            >
              <Image source={require("../images/addIcon.png")} />
            </TouchableOpacity>
          </View>
        ) : null}
      </Container>
    );
  }
}
