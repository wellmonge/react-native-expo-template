import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo';

const img =  require('../assets/android/logo-app.png')

class AuthLoadingScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
	}

	_retrieveData = async () => {
		try {
			const value = await AsyncStorage.getItem('@MySuperStore:auth');
			if (value !== null) {
				this.props.navigation.navigate('App', { auth: JSON.stringify(value) });
			} else {
				this.props.navigation.navigate('OnBoardingScreen');
			}
		} catch (error) {}
	};

	componentDidMount() {
		this._retrieveData();
	}

	render() {
		return (
			<LinearGradient
				colors={[ '#8e44ad', '#9b59b6', '#34495e' ]}
				style={{
					flex: 1,
					justifyContent: 'center',
					height: null,
					width: null
				}}
			>
        {/* <Icon style={{ alignSelf: 'center' }} name="motorcycle" size={120} color="#fff" /> */}
        <Image source={img} style={{flex: 1, 
          justifyContent: 'center',
          alignItems: 'stretch',
					height: null,
					width: null}}/>
				{/* <ActivityIndicator /> */}
				<StatusBar backgroundColor="blue" barStyle="light-content" />
			</LinearGradient>
		);
	}
}

export default AuthLoadingScreen;
