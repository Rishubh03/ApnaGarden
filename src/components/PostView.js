import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Text, Avatar} from 'react-native-paper';

const PostView = () => {
	return (
		<View>
			<Card className="my-1 mx-3">
					<Card.Cover className="p-2" source={require('../../assets/images/gardenimg1.jpg')} />
					<Card.Title title="Lalbagh Botanical Garden Blog: Stunning Greens of the City 2022" titleStyle={{ fontSize: 18, fontWeight: "700", }} />
					<Card.Content>
						<Text className="text-md pb-3">I visited the Lalbagh Botanical garden and put it right away on my list of places to visit in Bangalore – you simply can’t miss it! Here goes my experience in the gardens – the Lalbagh Botanical Garden Blog.</Text>
						<Text className="text-gray-600 pb-3" variant="bodyMedium">1000 <Text className="text-gray-600">views</Text> 2 weeks ago</Text>
					</Card.Content>

					<Card.Actions>

						<TouchableOpacity className="flex-1 items-center">
							<Avatar.Icon size={32} icon="heart" color="white" style={{backgroundColor:"#50C2C9" }}/>
						</TouchableOpacity>
						<TouchableOpacity className="flex-1 items-center ">
							<Avatar.Icon size={32} icon="comment" color="white" style={{backgroundColor:"#50C2C9" }}/>
						</TouchableOpacity>
						<TouchableOpacity className="flex-1 items-center">
							<Avatar.Icon size={32} icon="share-all" color="white" style={{backgroundColor:"#50C2C9" }}/>
						</TouchableOpacity>

					</Card.Actions>
				</Card>
		</View>
	);
}

const styles = StyleSheet.create({})

export default PostView;
