import React,  { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';
import ImageSlider from '../components/ImageSlider'

import { useGetLoggedUserQuery } from '../../services/userAuthApi'
import { useDispatch } from 'react-redux'
import { setUserAccessToken } from '../../features/authSlice'
import { setUserInfo } from '../../features/userSlice'
import { getToken } from '../../services/AsyncStorageService'

const HomeScreen = ({ navigation }) => {
	const [token, setToken] = useState({})
	const dispatch = useDispatch()
	useEffect(() => {
		(async () => {
			const token = await getToken()
			if (token) {
				const { access, refresh } = JSON.parse(token)
				setToken({
					"access": access,
					"refresh": refresh
				})
				dispatch(setUserAccessToken({ access_token: access, refresh: refresh }))
			}
		})();
	}, [])
	const { data, isSuccess } = useGetLoggedUserQuery(token.access)
	useEffect(() => {
		if (isSuccess) {
			dispatch(setUserInfo({ email: data.email, firstname: data.firstname, lastname: data.lastname }))
		}
	})
	return (
		<SafeAreaView className="flex-1 px-2">
			<View className="my-2">
				<ScrollView
					horizontal showsHorizontalScrollIndicator={false}
					className=""
				>
					<ImageSlider imgUrl={require("../../assets/images/first-page-logo.png")} />
					<ImageSlider imgUrl={require("../../assets/images/first-page-logo.png")} />
					<ImageSlider imgUrl={require("../../assets/images/first-page-logo.png")} />
					<ImageSlider imgUrl={require("../../assets/images/first-page-logo.png")} />

				</ScrollView>
			</View>
			<View>
				<Text className="text-base font-semibold text-gray-700">Explore</Text>
			</View>

			<View className="flex-row items-center justify-center mx-4">
				<View className="w-1/3 h-28 items-center justify-between border-r-2 border-gray-300">
					<TouchableOpacity onPress={() => { navigation.navigate('GardenListScreen') }}>
						<MaterialCommunityIcons name="information-outline" color='#50C2C9' size={60} />
						<Text className="text-center text-sm font-semibold">About{'\n'}Garden</Text>
					</TouchableOpacity>
				</View>
				<View className="w-1/3 h-28 items-center justify-between border-r-2 border-gray-300">
					<TouchableOpacity>
						<MaterialCommunityIcons name="near-me" color='#50C2C9' size={60} />
						<Text className="text-center text-sm font-semibold">Nearest{'\n'}Garden</Text>
					</TouchableOpacity>
				</View>
				<View className="w-1/3 h-28 items-center justify-between">
					<TouchableOpacity>
						<MaterialCommunityIcons name="forum" color='#50C2C9' size={60} />
						<Text className="text-center text-sm font-semibold">Community Forum</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View className="flex-row items-center justify-center mx-4 mt-4">
				<View className=" w-1/3 h-28 items-center justify-between border-r-2 border-gray-300">
					<TouchableOpacity onPress={() => { navigation.navigate('FeedbackScreen') }}>
						<MaterialCommunityIcons name="comment-quote" color='#50C2C9' size={60} />
						<Text className="text-center text-sm font-semibold">Feedback</Text>
					</TouchableOpacity>
				</View>
				<View className="w-1/3 h-28 items-center justify-between border-r-2 border-gray-300">
					<TouchableOpacity onPress={() => { navigation.navigate('DepartmentInfoScreen') }}>
						<MaterialCommunityIcons name="account-group" color='#50C2C9' size={60} />
						<Text className="text-center text-sm font-semibold">Garden Department</Text>
					</TouchableOpacity>
				</View>
				<View className="w-1/3 h-28 items-center justify-between">
					<TouchableOpacity onPress={() => { navigation.navigate('TrackComplaint') }}>
						<MaterialCommunityIcons name="file-document" color='#50C2C9' size={60} />
						<Text className="text-center text-sm font-semibold">Register Complaints</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View>
				<Text className="text-base font-semibold text-gray-700 my-2">Public Community</Text>
			</View>

			<View>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View className="flex-row items-center justify-between w-60 bg-yellow-400 p-2 rounded-xl mx-1">
						<Text className="text-base font-semibold">Public Community 1</Text>
						<Button style={{ backgroundColor: 'black' }} textColor="white">Join</Button>
					</View>
					<View className="flex-row items-center justify-between w-60 bg-yellow-400 p-2 rounded-xl mx-1">
						<Text className="text-base font-semibold">Public Community 1</Text>
						<Button style={{ backgroundColor: 'black' }} textColor="white">Join</Button>
					</View>
					<View className="flex-row items-center justify-between w-60 bg-yellow-400 p-2 rounded-xl mx-1">
						<Text className="text-base font-semibold">Public Community 1</Text>
						<Button style={{ backgroundColor: 'black' }} textColor="white">Join</Button>
					</View>
				</ScrollView>
			</View>

		</SafeAreaView>
	);
}

const styles = StyleSheet.create({})

export default HomeScreen;
