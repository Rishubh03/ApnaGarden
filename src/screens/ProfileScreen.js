import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { TextInput, Text, Avatar, Card, Button } from 'react-native-paper';
import { removeToken, getToken } from '../../services/AsyncStorageService';
import { useSelector } from 'react-redux';
import { useGetLoggedUserQuery } from '../../services/userAuthApi';
import { useDispatch } from 'react-redux'
import { setUserAccessToken } from '../../features/authSlice'

const ProfileScreen = ({ navigation }) => {
	const [token, setToken] = useState({})
	const dispatch = useDispatch()

	async() => {
		setToken(await getToken())
	}

	console.log(token)

	const handleFormSubmit = async () => {
		await removeToken()
		console.log("LogoutSuccess")
		navigation.navigate('LoginScreen')
	}

	return (
		<SafeAreaView className="flex-1 bg-[#E6E6E6]">
			<View className="bg-[#50C2C9] w-full items-center p-2">
				<Avatar.Image className="border-gray-400 border-2" size={150} source={require('../../assets/images/author.jpg')} />
			</View>

			<View>
				<Card className="mt-5 mx-2 p-4" type="elevated">
					<Text className="text-xl font-600">Personal Details</Text>
					<Text className="text-lg text-gray-500 pt-4">Name</Text>
					<Text className="text-md "></Text>
					<Text className="text-lg text-gray-500 pt-4">Mobile Name</Text>
					<Text className="text-md">1234567890</Text>
					<Text className="text-lg text-gray-500 pt-4">Email</Text>
					<Text className="text-md"></Text>
					<View className="pt-4">
						<Button title="Login" mode='outlined'
							labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
							textColor="white"
							style={{ backgroundColor: '#50C2C9', width: '100%', marginVertical: 5, borderColor: '#50C2C9', borderRadius: 25, borderWidth: 2 }}
							onPress={() => { navigation.navigate('EditProfileScreen') }}
						>Edit Personal Details</Button>
					</View>
				</Card>
			</View>

			<View className="flex-1 justify-end items-center pb-4">
				<Button className="bg-[#50C2C9]" mode="contained" textColor='white' onPress={handleFormSubmit}>
					Sign Out
				</Button>
				<Text className="mt-2">1.0.0(1)</Text>
				<Text>Terms Of Service</Text>
			</View>


		</SafeAreaView>

	);
}

const styles = StyleSheet.create({})

export default ProfileScreen;
