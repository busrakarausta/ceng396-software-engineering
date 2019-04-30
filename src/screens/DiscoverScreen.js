import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import NotifCard from "../components/NotifCard";
import bgSrc from "../images/pp.jpg";
import ppSrc from "../images/pp1.jpg";
import ppSrc2 from "../images/pp2.jpg";
const sources = [
  { pp: bgSrc, txt: "You added a new task to Xamarin Basics." },
  { pp: ppSrc, txt: "Ekrem Güven added a new task to Idea State." },
  {
    pp: ppSrc2,
    txt: "Büşra Karausta deleted Management task of Github Project."
  }
];
export default class DiscoverScreen extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={sources}
          renderItem={({ item }) => <NotifCard src={item.pp} text={item.txt} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
