import React from "react";
import { View, StatusBar } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  TabNavigator
} from "react-navigation";
import DiscoverScreen from "./src/screens/DiscoverScreen";
import Header from "./src/components/Header";
import DoneScreen from "./src/screens/DoneScreen";
import DoingScreen from "./src/screens/DoingScreen";
import BottomBar from "./src/components/BottomBar/BottomBar";

const TabNavigation = createBottomTabNavigator(
  {
    Discover: DiscoverScreen,
    Done: DoneScreen,
    Doing: DoingScreen
  },
  {
    tabBarComponent: props => <BottomBar {...props} />
  }
);
const HomeNavigator = createStackNavigator(
  {
    Tab: TabNavigation
  },
  {
    headerMode: "none",
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
