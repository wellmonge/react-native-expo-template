import React, { Component } from 'react';
import { View, AsyncStorage, StatusBar } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import _data from '../models/dummyData';
import CustomListView from '../components/CustomListView';

const styles = {
	container: { flex: 1 },
	iconAlign: { alignSelf: 'center' },
	drawerToggle: { padding: 20 },
	headerStyle: { backgroundColor: '#fff' },
	headerTitleStyle: { fontWeight: 'bold' }
	// searchBar: { flex: 1 }
};

class Home extends Component {
	static navigationOptions = ({ navigation }) => {
		const auth = navigation.getParam('auth');
		console.log(auth);
		return {
			headerStyle: styles.headerStyle,
			headerTintColor: '#000',
			headerTitleStyle: styles.headerTitleStyle,
			headerRight: HeaderButton({
				navigation: navigation,
				iconNameAndroid: 'sign-out',
				iconColor: '#000',
				iconNameIOS: 'ios-log-out',
				onPress: () => {
					AsyncStorage.clear();
					navigation.navigate('auth');
				}
			}),

			headerTitle: <View style={{ flex: 2, flexDirection: 'column' }} />,

			headerLeft: HeaderButton({
				navigation: navigation,
				iconNameAndroid: 'bars',
				iconColor: '#000'
			})
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
		return (
			<View style={styles.container}>
				<CustomListView data={_data} navigateTo={this.navigateTo} />
			</View>
		);
	}
}

export default Home;
