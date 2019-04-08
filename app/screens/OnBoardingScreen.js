import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Swiper from '../components/Swiper';

const styles = {
	slide: {
		flex: 1, // Take up all screen
		justifyContent: 'center', // Center vertically
		alignItems: 'center' // Center horizontally
	},
	// Header styles
	header: {
		color: '#FFFFFF',
		fontSize: 30,
		fontWeight: 'bold',
		marginVertical: 15
	},
	// Text below header
	text: {
		color: '#FFFFFF',
		fontSize: 18,
		marginHorizontal: 40,
		textAlign: 'center'
	}
};

export default class OnBoardingScreen extends Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<Swiper
				onPress={() => {
					const { navigation } = this.props;
					navigation.navigate('LoginScreen');
				}}
			>
				{/* First screen */}
				<View style={[ styles.slide, { backgroundColor: '#8E44AD' } ]}>
					<Text style={styles.header}>EAT</Text>
					<Text style={styles.text}>Good nutrition is an important part of leading a healthy lifestyle</Text>
				</View>
				{/* Second screen */}
				<View style={[ styles.slide, { backgroundColor: '#E67E22' } ]}>
					<Text style={styles.header}>PRAY</Text>
					<Text style={styles.text}>Prayer is one of the most important things a Christian can do</Text>
				</View>
				{/* Third screen */}
				<View style={[ styles.slide, { backgroundColor: '#F1C40F' } ]}>
					<Text style={styles.header}>LOVE</Text>
					<Text style={styles.text}>Where there is love there is life</Text>
				</View>
			</Swiper>
		);
	}
}
