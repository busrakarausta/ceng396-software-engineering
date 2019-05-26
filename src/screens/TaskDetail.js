import React from "react";
import { Text, Dimensions } from "react-native";
import Modal from "react-native-modal";
import TaskCard from "../components/TaskCard";
import {
  Content,
  Card,
  CardItem,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const sources = [
  {
    name: "karaustabusra",
    deadline: "12/02/2020",
    desc: "You added a new task to Xamarin Basics.",
    comment: "deneme comment"
  },
  {
    name: "karaustabusra",
    deadline: "12/02/2020",
    desc: "Ekrem Güven added a new task to Idea State."
  },
  {
    name: "karaustabusra",
    deadline: "12/02/2020",
    desc: "Büşra Karausta deleted Management task of Github Project."
  },
  {
    name: "karaustabusra",
    deadline: "12/02/2020",
    desc: "Ekrem Güven added a new task to Idea State."
  },
  {
    name: "karaustabusra",
    deadline: "12/02/2020",
    desc: "You added a new task to Xamarin Basics."
  },
  {
    name: "karaustabusra",
    deadline: "12/02/2020",
    desc: "Ekrem Güven added a new task to Idea State."
  },
  {
    name: "karaustabusra",
    deadline: "12/02/2020",
    desc: "Büşra Karausta deleted Management task of Github Project."
  }
];

export default class TaskDetail extends React.Component {
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
    return (
      <Modal
        isVisible={this.props.isVisible}
        hasBackdrop={true}
        onBackdropPress={this.props.onBackdropPress}
        style={{
          borderRadius: 20,
          marginTop: height / 1.7,
          position: "absolute",
          padding: 20,
          backgroundColor: "rgba(255,255,255,0.8)",
          alignSelf: "center",
          width: width / 1.5,
          height: height / 3.6
        }}
      >
        <TaskCard
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
                  {sources.name}
                </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody style={{ width: "90%", height: "18%" }}>
            <Text note numberOfLines={2}>
              {sources.comment}
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
        </TaskCard>
      </Modal>
    );
  }
}
