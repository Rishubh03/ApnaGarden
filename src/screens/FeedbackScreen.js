import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { useGetGardensQuery } from '../../services/gardensApi';


const FeedbackScreen = ({navigation}) => {
	const { data,error, isLoading, isFetching, isSuccess,  } = useGetGardensQuery();
	const [value, setValue] = useState(null);
	const [isFocus, setIsFocus] = useState(false);
	const [rating, setRating] = useState(0);

	

	if(isLoading){
		return <Text className="flex-1 justify-center">Loading...</Text>
	}else if (isSuccess){
		const firstData = [];
		data.map((garden =>(
			firstData.push({label: garden.garden_name, value: garden.id})
		)))
	return (
		<SafeAreaView className="flex-1 px-2 bg-[#E6E6E6]">
			<ScrollView>
				<Text className="text-3xl font-bold">Leave a review</Text>
				<Text className="text-black text-2xl font-semibold pt-4">Select a Garden</Text>
				<Dropdown
					data={firstData}
					search
					maxHeight={300}
					style={{
						backgroundColor: 'white',
						borderColor: 'gray',
						borderWidth: 0,
						marginTop: 10,
					}}
					itemTextStyle={{
						color: 'gray',
					}}
					activeColor="gray"
					labelField="label"
					valueField="value"
					searchPlaceholder="Search"
					value={value}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
					onChange={item => {
						setValue(item.value);
					}}
				/>
				<Text className="text-black text-2xl font-semibold pt-4">Cleaning</Text>
				<Text className="text-gray-400 text-base font-semibold">How likely are you to recommend Garden 1 to others?</Text>
				<Rating
					type='star'
					ratingCount={5}
					imageSize={40}

					ratingColor='#3498db'
					ratingBackgroundColor='#c8c7c8'
					tintColor='#E6E6E6'
					
				/>
				<Text className="text-black text-2xl font-semibold pt-4">Maintenance</Text>
				<Text className="text-gray-400 text-base font-semibold">How likely are you to recommend Garden 1 to others?</Text>
				<Rating
					type='star'
					ratingCount={5}
					imageSize={40}

					ratingColor='#3498db'
					ratingBackgroundColor='#c8c7c8'
					tintColor='#E6E6E6'
					
				/>
				<Text className="text-black text-2xl font-semibold pt-4">Greenery</Text>
				<Text className="text-gray-400 text-base font-semibold">How likely are you to recommend Garden 1 to others?</Text>
				<Rating
					type='star'
					ratingCount={5}
					imageSize={40}
					ratingColor='#3498db'
					ratingBackgroundColor='#c8c7c8'
					tintColor='#E6E6E6'

				/>
				<Text className="text-black text-2xl font-semibold pt-4">Facilities</Text>
				<Text className="text-gray-400 text-base font-semibold">How likely are you to recommend Garden 1 to others?</Text>
				<Rating
					type='star'
					ratingCount={5}
					imageSize={40}
					ratingColor='#3498db'
					ratingBackgroundColor='#c8c7c8'
					tintColor='#E6E6E6'
				/>

				<Text className="text-black text-2xl font-semibold pt-4">Security</Text>
				<Text className="text-gray-400 text-base font-semibold">How likely are you to recommend Garden 1 to others?</Text>
				<Rating
					type='star'
					ratingCount={5}
					imageSize={40}
					ratingColor='#3498db'
					ratingBackgroundColor='#c8c7c8'
					tintColor='#E6E6E6'
				/>
				<Text className="text-black text-2xl font-semibold pt-4">Rate Garden</Text>
				<Text className="text-gray-400 text-base font-semibold">How likely are you to recommend Garden 1 to others?</Text>
				<Rating
					type='star'
					ratingCount={5}
					imageSize={40}
					tintColor='#E6E6E6'
					ratingColor='#3498db'
					ratingBackgroundColor='#c8c7c8'
				/>

				<Text className="text-black text-xl font-semibold pt-4">Anyting Else?</Text>
					<TextInput
						mode='outlined'
						outlineColor="gray"
						activeOutlineColor='gray'
						style={{backgroundColor:'#E6E6E6',borderRadius:15}}
						placeholder="Write your review here"
						multiline={true}
						numberOfLines={4}
						
						
					/>
				<Button title="Login" mode='outlined'
					labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
					textColor="white"
					onPress = {() => navigation.navigate('HomeScreen')}
					style={{ backgroundColor: '#50C2C9', width: '100%', marginVertical: 10, borderColor: '#50C2C9', borderRadius: 25, borderWidth: 2 }}
				>SUBMIT</Button>

			</ScrollView>
		</SafeAreaView>
	);
				}else if(error){
					return <Text className="flex-1 justify-center">Error...</Text>
				}
}

const styles = StyleSheet.create({})

export default FeedbackScreen;
