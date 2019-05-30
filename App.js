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
import DoneScreen from "./src/screens/DoneScreen";
import DoingScreen from "./src/screens/DoingScreen";
import BottomBar from "./src/components/BottomBar/BottomBar";
import TaskScreen from "./src/screens/TaskScreen";
import CreateTask from "./src/screens/CreateTask";
import CreateProject from "./src/screens/CreateProject";
import ProjectDetail from "./src/screens/ProjectDetail";
import { MenuProvider, Menu } from "react-native-popup-menu";
import TaskDetail from "./src/screens/TaskDetail";
import UserProfile from "./src/screens/UserProfile";
import Settings from "./src/screens/Settings";

const TabNavigation = createBottomTabNavigator(
  {
    Discover: DiscoverScreen,
    Doing: DoingScreen,
    Done: DoneScreen
  } /*,
  {
    tabBarComponent: props => <BottomBar {...props} />
  }*/
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
    Home: TabNavigation,
    Settings: Settings,
    Profile: UserProfile
  },
  {
    headerMode: "none",
    navigationOptions: {
      header: null
    },
    contentComponent: CustomDrawerComponent
  }
);

const ProjectNavigator = createStackNavigator(
  {
    TaskDetail: TaskDetail,
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
  Login: LoginScreen,
  Signup: SignupScreen,
  Home: HomeNavigator,
  Project: ProjectNavigator
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
