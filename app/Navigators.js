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
import RoutesScreen from './screens/RoutesScreen';

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

export const HomeStack = StackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  SettingsScreen:{ 
    screen: SettingsScreen
  },
  RoutesScreen: {
    screen: RoutesScreen
  }
});

export const SettingsStack = StackNavigator({
  SettingsScreen:{ 
    screen: SettingsScreen
  }
});

export const Tabs = TabNavigator(
  {
    Home: HomeStack,
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

export const Drawer = DrawerNavigator(
  {
    Home: HomeStack,
  },    
  {
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
});
