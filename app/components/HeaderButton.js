import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const styles = {
	iconAlign: { alignSelf: 'center' },
	container: { padding: Platform.OS === 'ios' ? 5 : 20, margin: Platform.OS === 'ios' ? 5 : 0 }
};

const HeaderButton = ({ navigation, iconNameAndroid, iconNameIOS, iconColor, onPress }) => {
	const defaultOnPress = () => {
		navigation.navigate('DrawerToggle');
	};
	onPress = onPress ? onPress : defaultOnPress;
	if (!iconNameIOS || !iconNameAndroid) return null;
	const iconPlatform =
		Platform.OS === 'ios' ? (
			<Ionicons name={iconNameIOS} size={28} color={iconColor} />
		) : (
			<FontAwesome style={styles.iconAlign} name={iconNameAndroid} size={28} color={iconColor} />
		);

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			{iconPlatform}
		</TouchableOpacity>
	);
};

export default HeaderButton;
