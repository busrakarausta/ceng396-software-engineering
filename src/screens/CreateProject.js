import React, { Component } from "react";
import { Dimensions, ScrollView, View, AsyncStorage } from "react-native";
import axios from "axios";
import {
  Button,
  Container,
  Content,
  Header,
  Item,
  Input,
  Left,
  Card,
  CardItem,
  Body,
  Text,
  DatePicker,
  Icon
} from "native-base";
import { Font, AppLoading } from "expo";
import { BASEURL, PROJECT, CURRENT_ID, ACCESSTOKEN } from "../const/base_const";

export default class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
    this.state = {
      token: "",
      current_id: "",
      pname: "",
      description: "",
      links: "",
      chosenDate: new Date(),
      loading: true,
      managers: [],
      participants: []
    };
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  create() {
    const {
      pname,
      description,
      chosenDate,
      token,
      current_id,
      participants,
      managers
    } = this.state;

    axios
      .post(
        BASEURL + PROJECT,
        {
          name: pname,
          creater: current_id,
          desc: description,
          status: 1,
          participant: participants,
          tasks: [],
          managers: managers,
          like: [],
          comment: [],
          dueDate: chosenDate,
          startDate: chosenDate
        },
        {
          headers: { Authorization: token }
        }
      )
      .then(response => {
        console.log(response.data);
        this.props.navigation.navigate("ProjectDetail", {
          project: response.data
        });
      })
      .catch(error => {
        console.error("Creation Error:", error);
      });
  }
  static navigationOptions = {
    header: null
  };
  _retrieveData = async name => {
    try {
      const value = await AsyncStorage.getItem(name);
      if (name == ACCESSTOKEN) this.setState({ token: value });
      else this.setState({ current_id: value });
    } catch (error) {
      // Error retrieving data
    }
  };
  _getProjects = async () => {
    try {
      await this._retrieveData(ACCESSTOKEN);
      await this._retrieveData(CURRENT_ID);
    } catch (error) {}
  };
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
    this._getProjects();
  }

  render() {
    let { width } = Dimensions.get("window");
    width = width * 0.9;
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
      <View style={{ flex: 1 }}>
        <Header
          style={{ justifyContent: "flex-start", backgroundColor: "orange" }}
        >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("TasksScreen")}
            >
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              CREATE PROJECT
            </Text>
          </Body>
        </Header>

        <ScrollView style={{ flex: 1 }}>
          <Container>
            <Content>
              <Card style={{ borderWidth: 2 }}>
                <CardItem header bordered>
                  <Icon name="md-clipboard" />
                  <Text style={{ color: "#333333", fontSize: 14 }}>
                    Project Name
                  </Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Input onChangeText={pname => this.setState({ pname })} />
                    </Item>
                  </Body>
                </CardItem>
              </Card>

              <Card style={{ borderWidth: 2 }}>
                <CardItem header bordered>
                  <Icon name="md-create" />
                  <Text style={{ color: "#333333", fontSize: 14 }}>
                    Project Description
                  </Text>
                </CardItem>

                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Input
                        maxHeight={150}
                        multiline={true}
                        onChangeText={description =>
                          this.setState({ description })
                        }
                      />
                    </Item>
                  </Body>
                </CardItem>
              </Card>

              <Card style={{ borderWidth: 2 }}>
                <CardItem header bordered>
                  <Icon name="md-calendar" />
                  <Text style={{ color: "#333333", fontSize: 14 }}>
                    Project Due Date
                  </Text>
                </CardItem>

                <DatePicker
                  defaultDate={new Date(2019, 5, 31)}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2023, 12, 30)}
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

              <Card style={{ borderWidth: 2 }}>
                <CardItem header bordered>
                  <Icon name="md-link" />
                  <Text style={{ color: "#333333", fontSize: 14 }}>Links:</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Input
                        maxHeight={120}
                        multiline={true}
                        onChangeText={links => this.setState({ links })}
                      />
                    </Item>
                  </Body>
                </CardItem>
              </Card>

              <Button
                style={{ backgroundColor: "orange", marginTop: 10 }}
                block
                success
                onPress={() => this.create()}
              >
                <Text>Add Project</Text>
              </Button>
            </Content>
          </Container>
        </ScrollView>
      </View>
    );
  }
}
