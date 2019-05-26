import React, { Component } from "react";
import { Dimensions , View, Text} from "react-native";
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
  DatePicker,
  Header,
  Icon,
  Left
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
      <View style={{flex:1}}>
      <Header style={{justifyContent: 'flex-start'}}>
      <Left>
        <Button transparent >
        <Icon name='md-arrow-back' />
        </Button>
      </Left>
      <Body>
        <Text> X PROJECT </Text>
      </Body>
      
      </Header>

      <ScrollView style={{ flex: 1 }}>
        <Container>
          <Content>
            <Card style={{ borderWidth: 2 }}>
              <CardItem header bordered>
              <Icon name='md-document' />
                <Text style={{ color: "#333333" , fontSize:14  }}>Task Name </Text>
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
              <Icon name='md-create' />
                <Text style={{ color: "#333333" , fontSize:14 }}>Task Description </Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Item floatingLabel>
                    <Input maxHeight={150} multiline={true} />
                  </Item>
                </Body>
              </CardItem>
            </Card>

            <Card style={{ borderWidth: 2 }}>
            <CardItem header bordered>
              <Icon name='md-calendar' />
              <Text style={{   color: "#333333" , fontSize:14 }}>Task Due Date</Text>             
               </CardItem>
              <DatePicker
                defaultDate={new Date(2019, 5, 31)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2019, 12, 30)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"calendar"}
                placeHolderText="select date.."
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
              <Text>Add Task</Text>
            </Button>
          </Content>
        </Container>
      </ScrollView>
      </View>
    );
  }
}
