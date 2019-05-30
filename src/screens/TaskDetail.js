import React from "react";
import { Text, Dimensions, View, FlatList, TextInput } from "react-native";
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
import NotifCard from "../components/NotifCard";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const sources = [
  {
    taskname: "Github Repository",
    deadline: "12/02/2020",
    desc: "Create a github repository",
    comment: "deneme comment1"
  },
  {
    taskname: "Recovery Code",
    deadline: "12/02/2020",
    desc: "When ending projects, recovery code. ",
    comment: "deneme comment3"
  }
];

export default class TaskDetail extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, text: "comment" };
  }
  render() {
    return (
      <Modal
        isVisible={true} //{this.props.isVisible}
        hasBackdrop={true}
        onBackdropPress={this.props.onBackdropPress}
        style={{
          borderRadius: 20,
          marginTop: 75,
          position: "absolute",
          padding: 20,
          backgroundColor: "rgba(255,255,255,0.8)",
          alignSelf: "center",
          width: width / 1.4,
          height: height / 1.5
          //  backgroundColor: "pink"
        }}
      >
        <View style={{ elevation: 5 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "left",
              padding: 7
            }}
          >
            Task Name:
            {sources.name}
          </Text>
        </View>
        <View style={{ elevation: 5 }}>
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
        </View>
        <View style={{ elevation: 5 }}>
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
        </View>
        <View style={{ elevation: 5 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "left",
              padding: 7
            }}
          >
            Comments
            <TextInput
              style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
          </Text>
          <View style={{ flex: 1, marginTop: 10 }}>
            <FlatList
              data={sources}
              renderItem={({ item }) => <Text>{item.comment}</Text>}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </Modal>
    );
  }
}
