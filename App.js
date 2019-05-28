import React from "react";
import { View, StatusBar, SafeAreaView, ScrollView } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  DrawerItems,
  createDrawerNavigator
} from "react-navigation";
import DiscoverScreen from "./src/screens/DiscoverScreen";
import Header from "./src/components/Header";
import DoneScreen from "./src/screens/DoneScreen";
import DoingScreen from "./src/screens/DoingScreen";
import BottomBar from "./src/components/BottomBar/BottomBar";
import ToDoScreen from "./src/screens/ToDoScreen";
import InProgressScreen from "./src/screens/InProgressScreen";
import TaskScreen from "./src/screens/TaskScreen";
import CreateTask from "./src/screens/CreateTask";
import CreateProject from "./src/screens/CreateProject";
import CompletedScreen from "./src/screens/CompletedScreen";
import ProjectDetail from "./src/screens/ProjectDetail";
import { MenuProvider, Menu } from "react-native-popup-menu";
import TaskDetail from "./src/screens/TaskDetail";
import UserProfile from "./src/screens/UserProfile";

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
const CustomDrawerComponent = props => (
  <SafeAreaView
    style={{
      flex: 1
    }}
  >
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const HomeNavigator = createDrawerNavigator(
  {
    Home: TabNavigation
  },
  {
    headerMode: "none",
    contentComponent: CustomDrawerComponent,
    navigationOptions: {
      title: "Discover",
      header: props => (
        <Header
          {...props}
          openDrawer={() => this.props.navigation.openDrawer()}
        />
      )
    }
  }
);

const ProjectNavigator = createStackNavigator(
  {
    TaskScreen: TaskScreen,
    ProjectDetail: ProjectDetail,
    CreateProject: CreateProject,
    CreateTask: CreateTask
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

const WelcomeNavigator = createStackNavigator({
  Home: HomeNavigator,
  Project: ProjectNavigator,
  Signup: SignupScreen,
  Login: LoginScreen
});

const AppContainer = createAppContainer(WelcomeNavigator);
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <MenuProvider>
          < UserProfile />
        </MenuProvider>
      </View>
    );
  }
}
