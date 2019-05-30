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
import TaskScreen from "./src/screens/TaskScreen";
import CreateTask from "./src/screens/CreateTask";
import CreateProject from "./src/screens/CreateProject";
import CompletedScreen from "./src/screens/CompletedScreen";
import ProjectDetail from "./src/screens/ProjectDetail";
import { MenuProvider, Menu } from "react-native-popup-menu";
import TaskDetail from "./src/screens/TaskDetail";
import UserProfile from "./src/screens/UserProfile";
import Settings from "./src/screens/Settings";

const TabNavigation = createBottomTabNavigator(
  {
    Discover: DiscoverScreen,
    CreateTask: CreateTask,
    CreateProject: CreateProject,
    Completed: CompletedScreen,
    ToDo: ToDoScreen,
    InProgress: InProgressScreen,
    Done: DoneScreen,
    Doing: DoingScreen
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
    Settings: Settings,
    UserProfile: UserProfile,
    TaskScreen: TaskScreen,
    ProjectDetail: ProjectDetail,
    CreateProject: CreateProject,
    CreateTask: CreateTask
  },
  {
    navigationOptions: {
      title: "Discover  ",
      header: (navigation, props) => <Header {...props} {...navigation} />
    }
  }
);

const WelcomeNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeNavigator,
  Project: ProjectNavigator,
  Signup: SignupScreen
});

const AppContainer = createAppContainer(WelcomeNavigator);
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <MenuProvider>
          <AppContainer />
        </MenuProvider>
      </View>
    );
  }
}
