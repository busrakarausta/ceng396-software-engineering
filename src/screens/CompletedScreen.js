import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import TaskCard from "../components/TaskCard";

const sources = [
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
export default class CompletedScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 10 }}>
        <FlatList
          data={sources}
          renderItem={({ item }) => (
            <TaskCard desc={item.desc} name={item.name} />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
