import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  AsyncStorage,
  RefreshControl
} from "react-native";
import Card from "../components/Card";
import axios from "axios";
import Timestamp from "react-timestamp";
import Header from "../components/Header";
import { ACCESSTOKEN, CURRENT_ID, PROJECT, BASEURL } from "../const/base_const";

export default class DoneScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], token: "", current_id: "", status: 2 };
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
        <Header title="Done" navigation={() => this.props.navigation} />
        <FlatList
          data={this.state.projects}
          refreshControl={
            <RefreshControl
              colors={["#9Bd35A", "#689F38"]}
              refreshing={this.props.refreshing}
              onRefresh={this._getProjects.bind(this)}
            />
          }
          renderItem={({ item }) => (
            <Card
              title={item.name}
              onPress={() =>
                this.props.navigation.navigate("ProjectDetail", {
                  project: item
                })
              }
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
