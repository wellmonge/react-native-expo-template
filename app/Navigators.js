import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native";
import {
  StackNavigator,   
  DrawerNavigator,
  TabNavigator
} from "react-navigation";

//## APP COMPONENTS ###//
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";  
import AuthLoadingScreen from "./screens/AuthLoadingScreen";

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
      tabLabel: "Home",
      tabIcon: ({ tintColor }) => (
          <FontAwesome
            style={{ alignSelf: "center" }}
            name="ios-home"
            size={28}
            color={tintColor}
          />
        )
    }
  }
});

export const Drawer = DrawerNavigator({
  Home: {
    screen: AppStack,
    navigationOptions: {
      drawerLabel: "Home",
      drawerIcon: ({ navigate }) => (
        <FontAwesome
          style={{ alignSelf: "flex-start" }}
          name="home"
          size={30}
          color="#333333"
        />
      )
    }
  }
});
