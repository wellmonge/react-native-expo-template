import React from "react";
import { PlatformIOS } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import {
  StackNavigator, 
  DrawerNavigator,
  TabNavigator,
  TabBarBottom,
} from "react-navigation";

//## APP COMPONENTS ###//
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';  
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import SettingsScreen from './screens/SettingsScreen';
import RoutesScreen from './screens/RoutesScreen';
import QrCodeScreen from './screens/QrCodeScreen';

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

export const RoutesStack = StackNavigator({
  RoutesScreen:{ 
    screen: RoutesScreen
  }
});

export const QrCodeStack = StackNavigator({
  QrCodeScreen: {
    screen: QrCodeScreen
  },
});


export const Tabs = TabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
    Routes: RoutesStack,
    QrCode: QrCodeStack,


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
    Settings: SettingsStack,
    Routes: RoutesStack,
    QrCode: QrCodeStack,
  },    
  {
    navigationOptions: ({ navigation }) => ({  
          
      drawerLabel: ({ focused, tintColor }) => {
      
        const auth = navigation.getParam('auth');
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          alert(auth)
          return "Pedidos";
        } else if(routeName === 'Settings') {
          return "Configurações";
        } else if(routeName === 'Routes') {
          return "Rotas";
        }
      },
      drawerIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName= "shopping-cart"
        } else if(routeName === 'Settings') {
          iconName= "cog"
        }else if(routeName === 'Routes'){
          iconName= "map"
        }

        return <FontAwesome style={{ alignSelf: "flex-start" }} name={iconName} size={30} color={tintColor} />;
      },
      
    }),
  });
