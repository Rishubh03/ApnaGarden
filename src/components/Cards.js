import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';

const Cards = () => {
	return (
		<TouchableOpacity>
			<Card>
				<View className="flex-col items-center bg-green-400/75 rounded-2xl ">
					<Image
						source={require("../../assets/images/AboutGarden.png")}
						className="w-28 h-16"
					/>
					<Text className="text-base font-bold" >About </Text>
					<Text className="text-base font-bold">Garden</Text>
				</View>
			</Card>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({})

export default Cards;
