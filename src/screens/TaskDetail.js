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
  }
];

export default class TaskDetail extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  render() {
    return (
      <Modal
        isVisible={true} //{this.props.isVisible}
        hasBackdrop={true}
        onBackdropPress={this.props.onBackdropPress}
        style={{
          borderRadius: 20,
          marginTop: 20,
          position: "absolute",
          padding: 20,
          //  backgroundColor: "rgba(255,255,255,0.8)",
          alignSelf: "center",
          width: width / 1.5,
          height: height / 1.5,
          backgroundColor: "pink"
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            padding: 7
          }}
        >
          Task Name:{sources.name}
          <Text style={{ fontWeight: "normal" }}> Task 1 </Text>
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            padding: 7
          }}
        >
          Task Detail:{sources.desc}
          <Text style={{ fontWeight: "normal" }}> I'm task description </Text>
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            padding: 7
          }}
        >
          Due Date:{sources.deadline}
          <Text style={{ fontWeight: "normal" }}> I'm duedate </Text>
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            padding: 7
          }}
        >
          Comments {sources.comment} {"\n"}
          <Icon active style={{ fontSize: 20 }} name="chatbubbles" />
          <Text style={{ fontWeight: "normal" }}> We are comments </Text>
          {"\n"}
          <Icon active style={{ fontSize: 20 }} name="chatbubbles" />
          <Text style={{ fontWeight: "normal" }}> We are comments </Text>
          {"\n"}
          <Icon active style={{ fontSize: 20 }} name="chatbubbles" />
          <Text style={{ fontWeight: "normal" }}> We are comments </Text>
          {"\n"}
        </Text>
      </Modal>
    );
  }
}
