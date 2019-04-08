import React, { Component } from 'react';
import { TouchableOpacity, Platform, View ,AsyncStorage} from 'react-native';
import { SearchBar } from 'react-native-elements';
import HeaderButton from "../components/HeaderButton";
import _data from '../models/dummyData';
import CustomListView from '../components/CustomListView';

const styles = {
	iconAlign: { alignSelf: 'center' },
	drawerToggle: { padding: 20 },
	headerStyle: { backgroundColor: '#fff' },
	headerTitleStyle: { fontWeight: 'bold' },
	searchBar: { flex: 1 }
};

const logout = (navigation) => {
  let iconPlatform = <FontAwesome style={styles.iconAlign} name="bars" size={28} color="#333333" />;

	if (Platform.OS === 'ios') {
		iconPlatform = <Ionicons name="ios-home" size={28} color="#333333" />;
	}
	return (
		<TouchableOpacity
			style={styles.drawerToggle}
			onPress={() => {
				navigation.navigate('home');
			}}
		>
			{iconPlatform}
		</TouchableOpacity>
	);
};

const headerRight = (navigation) => {
	let iconPlatform = <FontAwesome style={styles.iconAlign} name="bars" size={28} color="#333333" />;

	if (Platform.OS === 'ios') {
		iconPlatform = <Ionicons name="ios-home" size={28} color="#333333" />;
	}
	return (
		<TouchableOpacity
			style={styles.drawerToggle}
			onPress={() => {
				navigation.navigate('DrawerToggle');
			}}
		>
			{iconPlatform}
		</TouchableOpacity>
	);
};

class Home extends Component {
	static navigationOptions = ({ navigation }) => {
		const auth = navigation.getParam('auth');
		console.log(auth);
		return {
			headerStyle: styles.headerStyle,
			headerTintColor: '#000',
			headerTitleStyle: styles.headerTitleStyle,
			headerRight: HeaderButton({ navigation: navigation, iconName: "sign-out", iconColor: "#000", onPress: () => {  
				AsyncStorage.clear();
				navigation.navigate('auth') } }),

			headerTitle: (
				<View style={{ flex: 2, flexDirection: 'column' }}>
					<SearchBar
						lightTheme
						round
						containerStyle={styles.searchBar}
						icon={{ type: 'font-awesome', name: 'search' }}
						onChangeText={function name(params) {}}
						onClearText={function(params) {}}
						placeholder="Buscar..."
					/>
				</View>
			),

			headerLeft: HeaderButton({ navigation: navigation, iconName: "bars", iconColor: "#000" })
		};
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	navigateTo = () => {
		this.props.navigation.navigate('RoutesScreen', { teste: 'Fromhome' });
	};

	render() {
		return <CustomListView data={_data} navigateTo={this.navigateTo} />;
	}
}

export default Home;
