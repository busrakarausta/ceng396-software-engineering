import React, { Component } from 'react';
import {TouchableOpacity} from "react-native";
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';

 export default class Settings extends Component {
    state = { switchValue: false };

    toggleSwitch = value => {
      this.setState({ switchValue: value });
    };
    
    static navigationOptions = {
      header: null
    };
    
    
  render() {
    return (
      <Container>
         
         <Header style={{ backgroundColor: "orange" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Discover")}
            >
              <Icon name="md-arrow-round-back" />
            </Button>
          </Left>
          <Body>
              <Text style={{fontSize:22, color:"white"}}> Settings </Text>
          </Body>
         

         
        </Header>
       

        <Content>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#877a69" }}>
                <Icon active name="md-notifications" />
              </Button>
            </Left>
            <Body>
              <Text style={{fontSize:20}}>Notifications</Text>
            </Body>
            <Right>
              <Switch 
                onValueChange={this.toggleSwitch}
                value={this.state.switchValue}
              />
            </Right>
          </ListItem>

       
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#877a69" }}>
                <Icon active name="md-log-out" />
              </Button>
            </Left>
            <Body>
                <TouchableOpacity 
                  
                    onPress={() => this.props.navigation.navigate("LoginScreen")}
                    
                >
                     <Text style={{fontSize:20}}>Log Out</Text>
              </TouchableOpacity>
            </Body>
            <Right>
            </Right>
          </ListItem>
          
        </Content>
      </Container>
    );
  }
}

/*
logout

 onPress={() => {
                        this.props._signOutAsync();
                        if (this.props.token === "")
                          this.props.navigation.navigate("loginScreen");
                      }}

*/