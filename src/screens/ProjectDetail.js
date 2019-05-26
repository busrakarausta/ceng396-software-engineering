import React, { Component } from "react";
import { Dimensions, View, Image, Text ,FlatList, TouchableOpacity} from "react-native";
import {
  Button,
  Icon,
  Header,
  Body,
  Left} from "native-base";
import { Font, AppLoading } from "expo";


const sources = [
  {
    name: "karaustabusra",
    deadline: "12/02/2020",
    desc: "You added a new task to Xamarin Basics."
  }
];


export default class ProjectDetail extends Component {
  

  static navigationOptions = {
    header: null
  };

  render() {
    let { width } = Dimensions.get("window");
    width = width * 0.9;

    return (
      <View style={{flex:1}}>

      <Header style={{justifyContent: 'flex-start'}}>
        <Left>
          <Button transparent
          
          onPress={() => this.props.navigation.navigate("DiscoverScreen")}
          >
          <Icon name='md-arrow-back' />
          </Button>
        </Left>  
        <Body>
        <Text style={{color:"white" , fontWeight:"bold"}}>
          DETAILS
        </Text>
      </Body>    
      </Header>
      <FlatList
          data={sources}
          renderItem={({ item }) => (
            <Text desc={item.desc} option="Done" name={item.name} />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      
        
                
                <View style={{alignSelf:"flex-end", marginBottom:6}}>
                  <TouchableOpacity            
                     onPress={() => this.props.navigation.navigate("CreateTask")}
                  >
                <Image source={require('../images/addIcon.png')} />
                </TouchableOpacity>
                </View>
                
      </View>
    );
  }
}

/*

      <Text
                style={{
                  fontSize: 25,
                  alignSelf: "center"
                }}
              >
                {sources.name}
              </Text>     
            
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: "center",
                   
                  }}
                >
                  {sources.deadline}
                </Text>
                       
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: "center",
                   
                  }}
                >
                  {sources.description}
                </Text>

*/