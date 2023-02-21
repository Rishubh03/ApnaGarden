import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useGetFeedsQuery } from '../../services/feedsApi';
import  PostView from '../components/PostView';

const PostViewScreen = () => {
	const { data, isSuccess, error, isLoading } = useGetFeedsQuery();
	if (isLoading){
		return <Text>Loading...</Text>
	}else if (isSuccess){
	return (
		<SafeAreaView className="flex-1 bg-[#E6E6E6]">
			<ScrollView className="flex-1">
				<View className="justify-center flex-row">
					<TouchableOpacity className="items-center flex-col flex-1 bg-white  h-28 m-2 justify-center border-solid border-2 border-[#1F83B4] rounded-md">
						<View className="items-center">

							<Avatar.Icon size={32} icon="camera" color="white" style={{backgroundColor:"#50C2C9" }}/>
							<Text className="text-sm text-center font-bold">Add a</Text>
							<Text className="text-sm text-center font-bold">photo</Text>

						</View>
					</TouchableOpacity>

					<TouchableOpacity className="items-center flex-col flex-1 bg-white h-28 m-2 justify-center border-solid border-2 border-[#1F83B4]  rounded-md">
						<View className=" items-center">

							<Avatar.Icon size={32} icon="play" color="white" style={{backgroundColor:"#50C2C9" }}/>
							<Text className="text-sm text-center font-bold">Add a</Text>
							<Text className="text-sm text-center font-bold">Video</Text>

						</View>
					</TouchableOpacity>
					
					<TouchableOpacity className="items-center flex-col flex-1 bg-white h-28 m-2 justify-center border-solid border-2 border-[#1F83B4]  rounded-md">
						<View className=" items-center ">

							<Avatar.Icon size={32} icon="pencil" color="white" style={{backgroundColor:"#50C2C9" }}/>

							<Text className="text-sm text-center font-bold">Write</Text>
							<Text className="text-sm font-bold">Something</Text>


						</View>
					</TouchableOpacity>
				</View>
			{data.map((post =>(
				<PostView key={post.id} post={post}/>
			)))}
				{/* <PostView/>
				<PostView/>
				<PostView/>
				<PostView/> */}
				
			</ScrollView>
		</SafeAreaView>
		
	);
	}else if (error){
		console.log(error);
	}
}

const styles = StyleSheet.create({})

export default PostViewScreen;
