import React, { Component } from 'react';
import { Dimensions, KeyboardAvoidingView } from 'react-native';
import {
  Button,
  Container,
  Content,
  Header,
  Form,
  Item,
  Label,
  Input,
  InputGroup,
  Left,
  Right,
  Text,
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class CreateTask extends Component {
  render() {
    let { width } = Dimensions.get('window');
    width = width * 0.9;
    return (
        <ScrollView tyle={{flex:1}}>
      <Container>
        <Content>
        <Card style={{borderWidth:2}}>
          <CardItem header bordered >
              <Text style={{color:"#333333"}}>Task Name </Text>
            </CardItem>
            <CardItem>
              <Body>
              <Item floatingLabel>
              <Input/>
            </Item>
              </Body>
            </CardItem>
          </Card>

        <Card style={{borderWidth:2}}>
          <CardItem header bordered >
              <Text style={{color:"#333333"}}>Task Description </Text>
            </CardItem>
            <CardItem>
              <Body>
              <Item floatingLabel>
              <Input
                multiline={true}
                numberOfLines={5}
              />
            </Item>
              </Body>
            </CardItem>
          </Card>

          <Button style={{backgroundColor:"orange" , marginTop:10}} block success >
            <Text>Add Task</Text>
          </Button>
        </Content>     
      </Container>
      </ScrollView>
    );
  }
}