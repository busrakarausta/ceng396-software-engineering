import React, { Component } from "react";
import {
  Dimensions,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { Button, Icon, Header, Body, Left,Container,
  Card,
  CardItem,
  Content,
  Text } from "native-base";
import { Font, AppLoading } from "expo";
import TaskScreen from "./TaskScreen";

export default class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      project: props.navigation.state.params.project,
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
              onPress={() => this.props.navigation.navigate("CreateTask")}
            >
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text style={{ color: "white", fontWeight: "bold" }}>DETAILS</Text>
          </Body>
        </Header>




        <Content>
          <Card>
            <CardItem header bordered>
              <Text style={{ color: "#565656" }}> {this.state.project.name}</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{this.state.project.desc}</Text>
              </Body>
            </CardItem>

          </Card>
        </Content>
       
       <TaskScreen style={{marginTop:15}} />

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


