import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Text, Avatar} from 'react-native-paper';


const MyPostScreen = () => {
	return (
		<SafeAreaView className="flex-1 bg-[#E6E6E6]">
		<View className="items-center py-2">
		<View className="bg-[#50C2C9] w-full items-center py-2">
		<Avatar.Image size={150} source={require('../../assets/images/author.jpg')} />
		</View>	
		</View>
		<View className="items-center p-4">
			<Text className="text-xl font-bold">Author Name</Text>
		</View>
		<View className="flex-row py-4 bg-[#50C2C9]">
		<View className="flex-1 items-center">
				<Text className="flex-col text-white">0</Text>
				<Text className="flex-col text-white">Likes</Text>
			</View>
			<View className="flex-1 items-center">
				<Text className="flex-col text-white">0</Text>
				<Text className="flex-col text-white">Post</Text>
			</View>
			<View className="flex-1 items-center">
				<Text className="flex-col text-white">0</Text>
				<Text className="flex-col text-white">Shares</Text>
			</View>
			<View className="flex-1 items-center">
				<Text className="flex-col text-white">0</Text>
				<Text className="flex-col text-white">Views</Text>
			</View>
		</View>
			 
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({})

export default MyPostScreen;
