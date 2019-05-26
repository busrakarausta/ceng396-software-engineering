import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Card from "../components/Card";
import Timestamp from "react-timestamp";
import { Left, Header, Right, Button, Icon } from "native-base";

export default class DoneScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header style={{ backgroundColor: "orange" }}>
          <Left>
            <Button transparent>
              <Icon style={{ color: "black" }} name="md-arrow-round-back" />
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Icon style={{ color: "black" }} name="home" />
            </Button>
          </Right>
        </Header>
        <Text style={styles.text}>Done</Text>
        <ScrollView>
          <Card
            // onPress={() => }
            title={"Reporter"}
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
            title={"English Speaking"}
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
            title={"Web Development"}
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
