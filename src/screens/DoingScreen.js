import React, { Component } from "react";
import { View, Text } from "react-native";
import Card from "../components/Card";
import Timestamp from "react-timestamp";
import { ScrollView } from "react-native-gesture-handler";
import { Left, Header, Right, Button, Icon } from "native-base";
export default class DoingScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Card
            // onPress={() => }
            title={"Task Design"}
            // subtitle=""
            status={"Begginer"}
          >
            <Timestamp
              style={{ color: "gray" }}
              time={1532102040}
              format="full"
              includeDay
              component={Text}
            />
          </Card>

          <Card
            // onPress={() => }
            title={"Product Updates"}
            // subtitle=""
            status={"Well"}
          >
            <Timestamp
              style={{ color: "green" }}
              time={1532102040}
              format="full"
              includeDay
              component={Text}
            />
          </Card>

          <Card
            // onPress={() => }
            title={"Time Implementation"}
            // subtitle=""
            status={"Bad"}
          >
            <Timestamp
              style={{ color: "red" }}
              time={1532102040}
              format="full"
              includeDay
              component={Text}
            />
          </Card>

          <Card
            // onPress={() => }
            title={"Game"}
            // subtitle=""
            status={"Well"}
          >
            <Timestamp
              style={{ color: "green" }}
              time={1532102040}
              format="full"
              includeDay
              component={Text}
            />
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  text: {
    fontFamily: "sans-serif",
    fontSize: 25,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 20
  }
};
