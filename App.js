import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import DiscoverScreen from "./src/screens/DiscoverScreen";
import Header from "./src/components/Header";

const HomeNavigator = createDrawerNavigator(
  {
    Discover: DiscoverScreen
  },
  {
    navigationOptions: {
      header: <Header />
    }
  }
);
const WelcomeNavigator = createStackNavigator({
  Home: HomeNavigator,
  Login: LoginScreen,
  Signup: SignupScreen
});

const AppContainer = createAppContainer(WelcomeNavigator);
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <AppContainer />
      </View>
    );
  }
}
