import React, { Component } from "react";
import { Dimensions } from "react-native";
import {
  Button,
  Container,
  Content,
  Item,
  Input,
  Card,
  CardItem,
  Body,
  Text,
  DatePicker
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { Font, AppLoading } from "expo";

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date(), loading: true };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
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
    let { width } = Dimensions.get("window");
    width = width * 0.9;
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
      <ScrollView style={{ flex: 1 }}>
        
      </ScrollView>
    );
  }
}
