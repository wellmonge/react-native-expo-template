import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  StackNavigator, 
  DrawerNavigator,
  TabNavigator,
  TabBarBottom,
} from "react-navigation";

//## APP COMPONENTS ###//
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import ParkingLotScreen from './screens/ParkingLotScreen';
import { CustomDrawer } from "./components/CustomDrawer";

export const AuthStack = StackNavigator({
  AuthLoadingScreen: {
    screen: AuthLoadingScreen
  },
  LoginScreen: {
    screen: LoginScreen
  }
});

export const HomeStack = StackNavigator({
  HomeScreen: {
    screen: HomeScreen
  }
});

export const ParkingLotStack = StackNavigator({
  ParkingLotScreen:{ 
    screen: ParkingLotScreen
  }
});


export const Tabs = TabNavigator(
  {
    Home: HomeStack,
    ParkingLot: ParkingLotStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if(routeName === 'ParkingLot') {
          iconName = `ios-car${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#e67e22',
      inactiveTintColor: 'gray',
      style :{ backgroundColor: 'whitesmoke' }
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
    ParkingLot: ParkingLotStack,
  },    
  {
    contentComponent: CustomDrawer,
    navigationOptions: ({ navigation }) => ({  
      drawerLabel: ({ focused, tintColor }) => {
        const auth = navigation.getParam('auth');
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return "Home";
        } else if(routeName === 'ParkingLot') {
          return "ParkingLot";
        }
      },
      drawerIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName= "home"
        } else if(routeName === 'ParkingLot') {
          iconName= "car"
        }
        return <FontAwesome style={{ alignSelf: "flex-start" }} name={iconName} size={30} color={tintColor} />;
      },
    }),
  });
