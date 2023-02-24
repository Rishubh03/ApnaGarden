import React, {useState, useEffect} from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { TextInput, Text, Avatar, Card, Button } from 'react-native-paper';
import { removeToken, getToken } from '../../services/AsyncStorageService';
import { useSelector } from 'react-redux';
import { useGetLoggedUserQuery } from '../../services/userAuthApi';
import { useDispatch } from 'react-redux'
import { setUserAccessToken } from '../../features/authSlice'


const EditProfileScreen = ({ navigation }) => {
	const myData = useSelector(state => state.user)
	const token = useSelector(state => state.auth.accessToken)
	const [firstName, setFirstName] = useState(myData.firstname)
	const [lastName, setLastName] = useState(myData.lastname)
	const [mobile, setMobile] = useState(myData.mobile)
	const [email, setEmail] = useState(myData.email)

	return (
		<SafeAreaView className="flex-1 bg-[#E6E6E6]">
			<View className="bg-[#50C2C9] w-full items-center p-2">
				<Avatar.Image className="border-gray-400 border-2" size={150} source={require('../../assets/images/author.jpg')} />
			</View>

			<View>
				<Card className="mt-5 mx-2 p-4" type="elevated">
					<Text className="text-xl font-600">Personal Details</Text>
					<Text className="text-lg text-gray-500 pt-4">Your Name</Text>
					<TextInput className="w-full h-12"
						mode="outlined"
						value={myData.firstname}
						onChangeText={setFirstName}
						label="Name"
						activeOutlineColor="#50C2C9"
						style={{ marginVertical: 5, backgroundColor: '#E6E6E6' }}
						outlineStyle={{ borderColor: '#50C2C9', borderRadius: 7, borderWidth: 2 }}
					/>
					
					<Text className="text-lg text-gray-500 pt-4">Mobile Number</Text>
					<TextInput className="w-full h-12"
						mode="outlined"
						value={"1234567890"}
						onChangeText={setMobile}
						label="Mobile No."
						activeOutlineColor="#50C2C9"
						style={{ marginVertical: 5, backgroundColor: '#E6E6E6' }}
						outlineStyle={{ borderColor: '#50C2C9', borderRadius: 7, borderWidth: 2 }}
					/>
				
					<Text className="text-lg text-gray-500 pt-4">Email</Text>
					<TextInput className="w-full h-12"
						mode="outlined"
						value={"abc@gmail.com"}
						onChangeText={setEmail}
						label=" Email Address"
						activeOutlineColor="#50C2C9"
						style={{ marginVertical: 5, backgroundColor: '#E6E6E6' }}
						outlineStyle={{ borderColor: '#50C2C9', borderRadius: 7, borderWidth: 2 }}
					/>
					
					<View className="pt-4">
						<Button title="Login" mode='outlined'
							labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
							textColor="white"
							style={{ backgroundColor: '#50C2C9', width: '100%', marginVertical: 5, borderColor: '#50C2C9', borderRadius: 25, borderWidth: 2 }}
							// onPress={handleFormSubmit}
							onPress={() => { navigation.navigate("ProfileScreen") }}
						>Save Details</Button>
					</View>
				</Card>
			</View>

			<View className="flex-1 justify-end items-center pb-4">
				<Button className="bg-[#50C2C9]" mode="contained" textColor='white' onPress={() => { navigation.navigate('LoginScreen') }}>
					Sign Out
				</Button>
				<Text className="mt-2">1.0.0(1)</Text>
				<Text>Terms Of Service</Text>
			</View>


		</SafeAreaView>

	);
}

const styles = StyleSheet.create({})

export default EditProfileScreen;
