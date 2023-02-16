import React from 'react';
import {View, StyleSheet,Text, SafeAreaView, ScrollView} from 'react-native';

const DepartmentInfoScreen = () => {
	return (
		<SafeAreaView className="flex-1 bg-[#E6E6E6] px-2">
			<ScrollView>
			<View className="items-center">
					<Text className="text-black text-2xl font-bold">Department Information</Text>
			</View>

			<View className="mt-4 h-10 bg-blue-300 justify-center">
				<Text className="text-black font-semibold text-xl">  Head of Department</Text>
			</View>
			<View className="px-2">
				<Text className="font-bold text-base text-black">Name : <Text className="font-normal text-base text-gray-800">Abcd Kumar</Text></Text>
				<Text className="font-bold text-base text-black">Designation : <Text className="font-normal text-base text-gray-800">Chief Garden Superintendent</Text></Text>
				<Text className="font-bold text-base text-black">E-mail id : <Text className="font-normal text-base text-gray-800">abc@gmail.com</Text></Text>
				<Text className="font-bold text-base text-black">Mobile No. : <Text className="font-normal text-base text-gray-800">+911234567890</Text></Text>
			</View>

			<View className="mt-4 h-10 bg-blue-300 justify-center">
				<Text className="text-black font-semibold text-xl">  Commissioner</Text>
			</View>
			<View className="px-2">
				<Text className="font-bold text-base text-black">Name : <Text className="font-normal text-base text-gray-800">Abcd Kumar</Text></Text>
				<Text className="font-bold text-base text-black">Designation : <Text className="font-normal text-base text-gray-800">Commissioner</Text></Text>
				<Text className="font-bold text-base text-black">E-mail id : <Text className="font-normal text-base text-gray-800">abc@gmail.com</Text></Text>
				<Text className="font-bold text-base text-black">Mobile No. : <Text className="font-normal text-base text-gray-800">+911234567890</Text></Text>
			</View>

			<View className="mt-4 h-10 bg-blue-300 justify-center">
				<Text className="text-black font-semibold text-xl">  Additional Commissioner</Text>
			</View>
			<View className="px-2">
				<Text className="font-bold text-base text-black">Name : <Text className="font-normal text-base text-gray-800">Abcd Kumar</Text></Text>
				<Text className="font-bold text-base text-black">Designation : <Text className="font-normal text-base text-gray-800">Additional Commissioner</Text></Text>
				<Text className="font-bold text-base text-black">E-mail id : <Text className="font-normal text-base text-gray-800">abc@gmail.com</Text></Text>
				<Text className="font-bold text-base text-black">Mobile No. : <Text className="font-normal text-base text-gray-800">+911234567890</Text></Text>
			</View>

			<View className="mt-4 h-10 bg-blue-300 justify-center">
				<Text className="text-black font-semibold text-xl">  Junior Engineer</Text>
			</View>
			<View className="px-2">
				<Text className="font-bold text-base text-black">Name : <Text className="font-normal text-base text-gray-800">Abcd Kumar</Text></Text>
				<Text className="font-bold text-base text-black">Designation : <Text className="font-normal text-base text-gray-800">Junior Engineer</Text></Text>
				<Text className="font-bold text-base text-black">E-mail id : <Text className="font-normal text-base text-gray-800">abc@gmail.com</Text></Text>
				<Text className="font-bold text-base text-black">Mobile No. : <Text className="font-normal text-base text-gray-800">+911234567890</Text></Text>
			</View>

			<View className="mt-4 h-10 bg-blue-300 justify-center">
				<Text className="text-black font-semibold text-xl">  Garden Inspector</Text>
			</View>
			<View className="px-2">
				<Text className="font-bold text-base text-black">Name : <Text className="font-normal text-base text-gray-800">Abcd Kumar</Text></Text>
				<Text className="font-bold text-base text-black">Designation : <Text className="font-normal text-base text-gray-800">Garden Inspector</Text></Text>
				<Text className="font-bold text-base text-black">E-mail id : <Text className="font-normal text-base text-gray-800">abc@gmail.com</Text></Text>
				<Text className="font-bold text-base text-black">Mobile No. : <Text className="font-normal text-base text-gray-800">+911234567890</Text></Text>
			</View>

			<View className="mt-4 h-10 bg-blue-300 justify-center">
				<Text className="text-black font-semibold text-xl">  Civil Engineer Assitant</Text>
			</View>
			<View className="px-2">
				<Text className="font-bold text-base text-black">Name : <Text className="font-normal text-base text-gray-800">Abcd Kumar</Text></Text>
				<Text className="font-bold text-base text-black">Designation : <Text className="font-normal text-base text-gray-800">Civil Engineer Assitant</Text></Text>
				<Text className="font-bold text-base text-black">E-mail id : <Text className="font-normal text-base text-gray-800">abc@gmail.com</Text></Text>
				<Text className="font-bold text-base text-black">Mobile No. : <Text className="font-normal text-base text-gray-800">+911234567890</Text></Text>
			</View>

			<View className="mt-4 h-10 bg-blue-300 justify-center">
				<Text className="text-black font-semibold text-xl">  Garden Supervisor</Text>
			</View>
			<View className="px-2">
				<Text className="font-bold text-base text-black">Name : <Text className="font-normal text-base text-gray-800">Abcd Kumar</Text></Text>
				<Text className="font-bold text-base text-black">Designation : <Text className="font-normal text-base text-gray-800">Garden Supervisor</Text></Text>
				<Text className="font-bold text-base text-black">E-mail id : <Text className="font-normal text-base text-gray-800">abc@gmail.com</Text></Text>
				<Text className="font-bold text-base text-black">Mobile No. : <Text className="font-normal text-base text-gray-800">+911234567890</Text></Text>
			</View>

			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({})

export default DepartmentInfoScreen;
