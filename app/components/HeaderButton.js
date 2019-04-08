import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const styles = {
	iconAlign: { alignSelf: 'center' },
	container: { padding: 20 }
};

const HeaderButton = ({ navigation, iconName, iconColor, onPress }) => {
	const defaultOnPress = () => {
    navigation.navigate('DrawerToggle')
  };
  onPress = onPress ? onPress : defaultOnPress;
	const iconPlatform = Platform.OS === 'ios'? <Ionicons name={'ios-' + iconName} size={28} color={iconColor} /> : <FontAwesome style={styles.iconAlign} name={iconName} size={28} color={iconColor} />;

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			{iconPlatform}
		</TouchableOpacity>
	);
};

export default HeaderButton;
