import React, { Component } from "react";
import {
  Dimensions,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Button, Icon, Header, Body, Left } from "native-base";
import { Font, AppLoading } from "expo";

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
      <View>
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
            <Text style={{ color: "white", fontWeight: "bold" }}>DETAILS</Text>
          </Body>
        </Header>
        <View style={{ flex: 1 }}>
          <Text>{this.state.project.desc}</Text>
          <Text>{this.state.project.name}</Text>
        </View>
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
      </View>
    );
  }
}
