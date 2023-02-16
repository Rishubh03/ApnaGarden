import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NotificationCard = ({msg}) => {
	return (
		<View className="flex-row bg-slate-200 justify-between my-1">
			<View className="flex-col p-2 w-1/6">
				<MaterialCommunityIcons name="message-badge" color='#50C2C9' size={40} />
			</View>
			<View className="flex-col w-3/5 pt-2">
				<Text className="font-bold text-sm">{msg}</Text>
			</View>
			<View className="flex-col p-2 w-1/6">
			<TouchableOpacity>
				<MaterialCommunityIcons name="dots-vertical" color='#50C2C9' size={40} />
			</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({})

export default NotificationCard;
