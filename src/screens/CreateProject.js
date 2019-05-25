import React, { Component } from "react";
import { Dimensions, FlatList, ScrollView } from "react-native";
import {
  Button,
  Container,
  Content,
  Header,
  Form,
  Item,
  Label,
  Input,
  InputGroup,
  Left,
  Right,
  Card,
  CardItem,
  Body,
  Text,
  DatePicker
} from "native-base";
import { Font, AppLoading } from "expo";

export default class CreateProject extends Component {
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
        <Container>
          <Content>
            <Card style={{ borderWidth: 2 }}>
              <CardItem header bordered>
                <Text style={{ color: "#333333" }}>Project Name </Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Item floatingLabel>
                    <Input />
                  </Item>
                </Body>
              </CardItem>
            </Card>

            <Card style={{ borderWidth: 2 }}>
              <CardItem header bordered>
                <Text style={{ color: "#333333" }}>Project Description </Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Item floatingLabel>
                    <Input multiline={true} numberOfLines={5} />
                  </Item>
                </Body>
              </CardItem>
            </Card>

            <Card style={{ borderWidth: 2 }}>
              <Text style={{ textAlign: "center" }}>Project Due Date:</Text>
              <DatePicker
                defaultDate={new Date(2019, 5, 31)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2019, 12, 30)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"calendar"}
                placeHolderText="select"
                textStyle={{ color: "red" }}
                placeHolderTextStyle={{ color: "#7a7979" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Card>

            <Button
              style={{ backgroundColor: "orange", marginTop: 10 }}
              block
              success
            >
              <Text>Add Project</Text>
            </Button>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

/*
date picker current selected date.
 <Text style={{ textAlign: "center"}}>
              Project Due Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>

*/
