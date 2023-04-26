import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Rating, AirbnbRating } from 'react-native-ratings';

const GardenDetailedView = () => {
	const [value, setValue] = useState(null);
	return(
		<SafeAreaView className="mx-2 my-2 bg-white flex-1">
			<Text className="text-2xl font-medium">Hello World</Text>
			<Rating
					type='star'
					ratingCount={5}
					imageSize={35}
					ratingBackgroundColor='white'
					ratingColor='#3498db'
					tintColor='#E6E6E6'
				/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({})

export default GardenDetailedView;
