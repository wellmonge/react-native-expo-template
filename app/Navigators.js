import React from 'react';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { StackNavigator, DrawerNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

// ## APP COMPONENTS ###//
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import OnBoardingScreen from './screens/OnBoardingScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import SettingsScreen from './screens/SettingsScreen';
import RoutesScreen from './screens/RoutesScreen';
import QrCodeScreen from './screens/QrCodeScreen';
import { CustomDrawer } from './components/CustomDrawer';

export const AuthStack = StackNavigator({
	AuthLoadingScreen: {
		screen: AuthLoadingScreen
	},
	OnBoardingScreen: {
		screen: OnBoardingScreen
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
	SettingsScreen: {
		screen: SettingsScreen
	},
	RoutesScreen: {
		screen: RoutesScreen
	}
});

export const SettingsStack = StackNavigator({
	SettingsScreen: {
		screen: SettingsScreen
	}
});

export const RoutesStack = StackNavigator({
	RoutesScreen: {
		screen: RoutesScreen
	}
});

export const QrCodeStack = StackNavigator({
	QrCodeScreen: {
		screen: QrCodeScreen
	}
});

export const Tabs = TabNavigator(
	{
		Home: HomeStack,
		Settings: SettingsStack,
		Routes: RoutesStack,
		QrCode: QrCodeStack
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Home') {
					iconName = `ios-home`;
				} else if (routeName === 'Settings') {
					iconName = `ios-cog`;
				} else if (routeName === 'Routes') {
					iconName = `ios-car`;
				} else if (routeName === 'QrCode') {
					iconName = `ios-qr-scanner`;
				}
				return <Ionicons name={iconName} size={30} color={tintColor} />;
			}
		}),
		tabBarOptions: {
			activeTintColor: 'black',
			inactiveTintColor: 'gray'
		},
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false
	}
);

export const Drawer = DrawerNavigator(
	{
		Home: HomeStack,
		Settings: SettingsStack,
		Routes: RoutesStack,
		QrCode: QrCodeStack
	},
	{
		contentComponent: CustomDrawer,
		navigationOptions: ({ navigation }) => ({
			drawerLabel: ({  }) => {
				const { routeName } = navigation.state;
				if (routeName === 'Home') {
					return 'Pedidos';
				}
				if (routeName === 'Settings') {
					return 'Configurações';
				}
				if (routeName === 'Routes') {
					return 'Rotas';
				}
				if (routeName === 'QrCode') {
					return 'QrCode';
				}
			},
			drawerIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Home') {
					iconName = 'shopping-cart';
				} else if (routeName === 'Settings') {
					iconName = 'cog';
				} else if (routeName === 'Routes') {
					iconName = 'map';
				} else if (routeName === 'QrCode') {
					iconName = 'qrcode';
				}
				return <FontAwesome style={{ alignSelf: 'flex-start' }} name={iconName} size={30} color={tintColor} />;
			}
		})
	}
);
