import { Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, SafeAreaView, Image } from 'react-native';
import React, { useState } from 'react'
import { Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const TcDetails = ({ item, token }) => {
	const navigation = useNavigation();
	return (
		<View>
			<TouchableOpacity onPress={() => { navigation.navigate("TrackComplaintDetails",{
				id: item.id,
				token: token,
				
			}) }}>
				<View className="border-2 p-2 rounded-lg border-gray-400 mb-2">
					<Text className="text-lg text-gray-500">Id : {item.id}</Text>
					<Text className="text-lg text-gray-500 pt-2">Garden Name : {item.garden}</Text>
					<Text className="text-lg text-gray-500 pt-2">User Name : {item.user_id}</Text>
					<Text className="text-lg text-gray-500 pt-2">Title : {item.title}</Text>
					<Text className="text-lg text-gray-500 pt-2">Date Posted : {item.date_posted}</Text>

					<View className="my-30">
						<View className="flex-row justify-between items-center">
							<View className="h-1 bg-green-500 flex-1" />
							<View className="h-4 w-4 bg-green-500 rounded-full" />
							<View className="h-1 bg-green-500 flex-1" />
							<View className="h-4 w-4 bg-green-500 rounded-full" />
							{item.status == '1' ?
								<View className="h-1 bg-gray-500 flex-1" />
								:
								<View className="h-1 bg-green-500 flex-1" />
							}
						</View>
						<View className="flex-row justify-between my-30">
							<Text>Submitted</Text>
							<Text>Pending</Text>
							<Text>Solved</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
}

export default TcDetails;
