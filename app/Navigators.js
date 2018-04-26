import React from "react";
import Icon from "@expo/vector-icons";
import { Text } from "react-native";
import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator
} from "react-navigation";

//## APP COMPONENTS ###//
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import AuthLoadingScreen from "./components/AuthLoadingScreen";

export const AuthStack = StackNavigator({
  AuthLoadingScreen: {
    screen: AuthLoadingScreen
  },
  LoginScreen: {
    screen: LoginScreen
  },
  SignUpScreen: {
    screen: SignUpScreen
  }
});

export const AppStack = StackNavigator({
  HomeScreen: {
    screen: HomeScreen
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: AppStack,
    navigationOptions: {
      tabBar: {
        label: "Home",
        icon: ({ tintColor }) => (
          <Icon
            style={{ alignSelf: "center" }}
            name="ios-home"
            size={28}
            color={tintColor}
          />
        )
      }
    }
  }
});

export const Drawer = DrawerNavigator({
  Home: {
    screen: AppStack,
    navigationOptions: {
      drawerLabel: "Home",
      drawerIcon: ({ navigate }) => (
        <Icon
          style={{ alignSelf: "flex-start" }}
          name="home"
          size={30}
          color="#333333"
        />
      )
    }
  }
});
