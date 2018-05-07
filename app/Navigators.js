import React from "react";
import { PlatformIOS } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import {
  StackNavigator,   
  DrawerNavigator,
  TabNavigator,
  TabBarBottom
} from "react-navigation";

//## APP COMPONENTS ###//
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';  
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import SettingsScreen from './screens/SettingsScreen';

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

export const SettingsStack = StackNavigator({
  SettingsScreen:{ 
    screen: SettingsScreen
  }
});

export const Tabs = TabNavigator(
  {
    Home: AppStack,
    Settings: SettingsStack

  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if(routeName === 'Settings') {
          iconName = `ios-cog${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

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
