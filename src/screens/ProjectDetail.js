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
              <SubMenuProject option={this.props.option} />
            </Body>
          </Right>
        </Header>

        <Content>
          <Card>
            <CardItem header bordered>
              <Text style={{ color: "#565656" }}>PROJECT NAME</Text>
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

        <TaskScreen style={{ marginTop: 15 }} />

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
      </Container>
    );
  }
}
