import React from "react";
import { Text, Dimensions } from "react-native";
import Modal from "react-native-modal";
import TaskCard from "../components/TaskCard";
import { Icon } from "native-base";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, task: props.navigation.state.params.task };
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
          Task Detail:{this.state.task.desc}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            padding: 7
          }}
        >
          Due Date:{this.state.task.dueDate}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            padding: 7
          }}
        >
          status {this.state.task.status} {"\n"}
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
