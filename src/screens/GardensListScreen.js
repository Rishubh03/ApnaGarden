import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, RefreshControl, ActivityIndicator, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from 'react-native-paper';
import GardenImage from '../components/GardenImage';
import { useGetGardensQuery } from '../../services/gardensApi';




const GardensListScreen = () => {


	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			
			setRefreshing(false);
			refetch();
		}, 2000);
	}, []);

	const { data, error, isLoading, isFetching, isSuccess, refetch} = useGetGardensQuery();
	if (isLoading) {
		return (
			<View className="flex-1 justify-center items-center">
				<ActivityIndicator size="large" color="#50C2C9" />
			</View>
		)
	} else if (isSuccess) {
		return (

			<SafeAreaView className="flex-1 px-2">
				<ScrollView showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}
				>
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
						{data.map((garden => (
							<GardenImage key={garden.id} imgUrl={require("../../assets/images/japanese-ross-garden.jpg")} title={garden.garden_name} />
						)))}

					</View>

				</ScrollView>
			</SafeAreaView>
		);
	}
	else if (error) {
		console.log("error");
		return <Text className="flex-1 justify-center">Error...</Text>
	}
	else if (isFetching) {
		console.log("fetching");
		return <Text className="flex-1 justify-center">Fetching...</Text>
	}
}

const styles = StyleSheet.create({})

export default GardensListScreen;
