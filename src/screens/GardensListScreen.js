import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from 'react-native-paper';
import { GardenImage } from '../index'

const GardensListScreen = () => {
	return (
		<SafeAreaView className="flex-1 px-2">
			<ScrollView showsVerticalScrollIndicator={false}>
				<View className="items-center">
					<Text className="pt-2 text-2xl font-semibold text-black">GARDENS IN YOUR AREA</Text>
				</View>
				<View className="pt-4">
					<TextInput
						className="bg-white border-1"
						label="Search"
						left={<TextInput.Icon icon="magnify" />}
					/>
				</View>
				<View className="pb-4">
					<GardenImage imgUrl={require("../../assets/images/japanese-ross-garden.jpg")} title="Japenese Rose Garden" />
					<GardenImage imgUrl={require("../../assets/images/ambazari-garden.jpg")} title="Ambazari Garden" />
					<GardenImage imgUrl={require("../../assets/images/telankhedi-garden.jpg")} title="Telankhedi Garden" />
					<GardenImage imgUrl={require("../../assets/images/hanuman-nagar-garden.jpg")} title="hanuman Nagar Garden" />
				</View>

			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({})

export default GardensListScreen;
