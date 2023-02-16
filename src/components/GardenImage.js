import React from 'react';
import { View, StyleSheet, Text,Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const GardenImage = ({imgUrl, title}) => {
	return (
		<View className="py-4">
			<Image
					source={imgUrl}
					style={{ width: '100%', height: 200, resizeMode: 'cover' }}
				/>
				<View className="flex-row items-center justify-between bg-slate-300 bg-opacity-100 h-16 absolute w-full bottom-0 right-0">
					<Text className="text-lg text-black font-normal">{title}</Text>
					<TouchableOpacity>
						<MaterialCommunityIcons name="arrow-right" color='#1F83B4' size={20} />
					</TouchableOpacity>
				</View>
		</View>
	);
}

const styles = StyleSheet.create({})

export default GardenImage;
