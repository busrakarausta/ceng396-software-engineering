import React, { Component } from "react";
import { View, Text, FlatList, AsyncStorage } from "react-native";
import Card from "../components/Card";
import axios from "axios";
import Timestamp from "react-timestamp";
import { ACCESSTOKEN, CURRENT_ID, PROJECT, BASEURL } from "../const/base_const";

export default class DoingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { projects: [], token: "", current_id: "", status: 1 };
  }

  componentWillMount() {
    this._getProjects();
  }
  _retrieveData = async name => {
    try {
      const value = await AsyncStorage.getItem(name);
      console.log(value);
      if (name == ACCESSTOKEN) {
        this.setState({ token: value });
        console.log(this.state.token);
      } else this.setState({ current_id: value });
    } catch (error) {
      // Error retrieving data
    }
  };
  _getProjects = async () => {
    try {
      await this._retrieveData(ACCESSTOKEN);
      await this._retrieveData(CURRENT_ID);
    } catch (error) {}
    if (this.state.current_id) {
      axios
        .get(
          BASEURL + PROJECT + this.state.current_id + "/" + this.state.status,
          {
            headers: { Authorization: this.state.token }
          }
        )
        .then(response => {
          this.setState({ projects: response.data });
          console.log(this.state.projects);
        })
        .catch(error => {
          console.error("ProjectAction:", error);
        });
    } else console.log("state is empty");
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.projects}
          renderItem={({ item }) => (
            <Card
              onPress={() =>
                this.props.navigation.navigate("ProjectDetail", {
                  project: item
                })
              }
              title={item.name}
            >
              <Timestamp
                style={{ color: "gray" }}
                time={item.timeStamp}
                format="full"
                includeDay
                component={Text}
              />
            </Card>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
