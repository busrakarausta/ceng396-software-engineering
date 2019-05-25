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
import ToDoScreen from "./src/screens/ToDoScreen";
import InProgressScreen from "./src/screens/InProgressScreen";
import CompletedScreen from "./src/screens/CompletedScreen";
import CreateTask from "./src/screens/CreateTask";
import CreateProject from "./src/screens/CreateProject";
import TaskScreens from "./src/screens/TaskScreens";
const TabNavigation = createBottomTabNavigator(
  {
    CreateProject: CreateProject,
    Discover: DiscoverScreen,
    Done: DoneScreen,
    Doing: DoingScreen,
    ToDo: ToDoScreen,
    InProgress: InProgressScreen,
    Completed: CompletedScreen
  },
  {
    tabBarComponent: (navigation, props) => <BottomBar {...props} />
  }
);
const HomeNavigator = createStackNavigator(
  {
    Tab: TabNavigation
  },
  {
    headerMode: "none",
    navigationOptions: {
      title: "  ",
      header: (navigation, props) => <Header {...props} {...navigation} />
    }
  }
);

const WelcomeNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeNavigator,
  Signup: SignupScreen
});

const AppContainer = createAppContainer(HomeNavigator);
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
