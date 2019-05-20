import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import CompletedCard from "../components/CompletedCard";

const sources = [
  { deadline: "19/05/2019", txt: "You added a new task to Xamarin Basics." },
  {
    deadline: "19/05/2019",
    txt: "Ekrem Güven added a new task to Idea State."
  },
  {
    deadline: "19/05/2019",
    txt: "Büşra Karausta deleted Management task of Github Project."
  },
  {
    deadline: "19/05/2019",
    txt: "Ekrem Güven added a new task to Idea State."
  },
  { deadline: "19/05/2019", txt: "You added a new task to Xamarin Basics." },
  {
    deadline: "19/05/2019",
    txt: "Ekrem Güven added a new task to Idea State."
  },
  {
    deadline: "12/02/2020",
    txt: "Büşra Karausta deleted Management task of Github Project."
  }
];
export default class CompletedScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginTop: 40,
            textAlign: "left",
            fontWeight: "bold",
            marginBottom: 20,
            fontSize: 20,
            marginLeft: 40,
            color: "black"
          }}
        >
          COMPLETED TASKS
        </Text>
        <FlatList
          data={sources}
          renderItem={({ item }) => (
            <CompletedCard text={item.txt} deadline={item.deadline} />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
