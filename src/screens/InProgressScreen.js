import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import TaskCard from "../components/TaskCard";
import { TASK, BASEURL } from "../const/base_const";

export default class InProgressScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { tasks: [], token: "", status: 2 };
  }

  componentWillMount() {
    this._getProjects();
  }
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(ACCESSTOKEN);

      this.setState({ token: value });
    } catch (error) {
      // Error retrieving data
    }
  };
  _getProjects = async () => {
    try {
      await this._retrieveData();
    } catch (error) {}
    if (this.state.token) {
      axios
        .get(BASEURL + TASK + this.props.project_id + "/" + this.state.status, {
          headers: { Authorization: this.state.token }
        })
        .then(response => {
          this.setState({ tasks: response.data });
          console.log(this.state.tasks);
        })
        .catch(error => {
          console.error("ProjectAction:", error);
        });
    } else console.log("state is empty");
  };
  render() {
    return (
      <View style={{ flex: 1, marginTop: 10 }}>
        <FlatList
          data={this.state.tasks}
          renderItem={({ item }) => <TaskCard option="Done" item={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
