import React from 'react';
import { View, SafeAreaView, Text, ActivityIndicator } from 'react-native';
import { useDetailComplaintQuery, useDeleteComplaintMutation } from '../../services/complaintApi';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native-paper';
import { addNotification } from '../../features/notificationSlice';

const TrackComplaintDetails = ({ navigation, route }) => {
	const { id, token } = route.params;

	// const token = useSelector(state => state.auth.access_token);
	console.log(token);
	const { data, isSuccess, error, isLoading } = useDetailComplaintQuery({ token, id });
	const [deleteComplaint, response] = useDeleteComplaintMutation();
	const dispatch = useDispatch();
	const handleDelete = () => {
		deleteComplaint({ id, token })
		dispatch(addNotification({ message: 'Complaint Deleted' }))
		navigation.navigate('TrackComplaint')
	}
	if (isLoading) {
		return (
			<View className="flex-1 justify-center items-center">
				<ActivityIndicator size="large" color="#50C2C9" />
			</View>
		)
	}
	else if (isSuccess) {
		return (
			<SafeAreaView className="p-4">
				<View className="border-2 p-2 rounded-lg border-gray-400 mb-2">
					<Text className="text-lg text-gray-500">Id : {data.id}</Text>
					<Text className="text-lg text-gray-500 pt-2">Garden Name : {data.garden}</Text>
					<Text className="text-lg text-gray-500 pt-2">User Name : {data.user_id}</Text>
					<Text className="text-lg text-gray-500 pt-2">Title : {data.title}</Text>
					<Text className="text-lg text-gray-500 pt-2">Status : {data.details}</Text>
					<Text className="text-lg text-gray-500 pt-2">Date Posted : {data.date_posted}</Text>
				</View>
				<View>
					<Button title="Login" mode='outlined'
						labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
						textColor="white"
						style={{ backgroundColor: '#50C2C9', width: '100%', marginVertical: 5, borderColor: '#50C2C9', borderRadius: 25, borderWidth: 2 }}
						onPress={handleDelete}
					>Delete Complaint</Button>
				</View>
			</SafeAreaView>
		);
	} else if (error) {
		console.log(error)
		return <Text>Error</Text>
	}
}



export default TrackComplaintDetails;
