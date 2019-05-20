import React, { Component } from "react";
import { View, Text} from "react-native";
import Card from "../components/Card";
import Timestamp from "react-timestamp";



export default class DoneScreen extends Component {
  render() {
    return (
      <View> 
      <Text style={styles.text}>Doing</Text>
      <ScrollView >
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


const styles={
  text: {
    fontFamily: 'sans-serif',
    fontSize: 25,
    fontSize: 20,
    fontWeight:"bold",
    marginTop:15, 
    marginBottom:15,
    marginLeft:20

  }
};