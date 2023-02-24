import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useCreatePostMutation } from '../../services/feedsApi';
import { Button, TextInput } from 'react-native-paper';

const CreateFeedPost = ({ navigation }) => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const token = useSelector(state => state.auth.access_token);
	const [createPost] = useCreatePostMutation();

	const handleSubmit = async () => {
		const post = { title, body };
		const response = await createPost({ post, token })

		if (response.data) {
			console.log('Post created successfully');
			navigation.navigate('HomeScreen');
		} else {
			console.log(response.error);
		}

	}
	return (
		<SafeAreaView className="px-2">

			<TextInput className="w-full"				
				mode="outlined"
				value={title}
				onChangeText={setTitle}
				label="Post Title"				
				activeOutlineColor="#50C2C9"
				style={{ marginVertical: 5, backgroundColor: 'white' }}
				outlineStyle={{ borderColor: '#50C2C9', borderRadius: 7, borderWidth: 2 }}
			/>
			<TextInput className="w-full"
				multiline={true}
				mode="outlined"
				value={body}
				onChangeText={setBody}
				label="Post Description"
				numberOfLines={5}
				activeOutlineColor="#50C2C9"
				style={{ marginVertical: 5, backgroundColor: 'white' }}
				outlineStyle={{ borderColor: '#50C2C9', borderRadius: 7, borderWidth: 2 }}
			/>

			<Button title="Submit" mode='outlined'
				labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
				textColor="white"
				style={{ backgroundColor: '#50C2C9', width: '100%', marginVertical: 5, borderColor: '#50C2C9', borderRadius: 25, borderWidth: 2 }}
				onPress={handleSubmit}
			>Submit</Button>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({})

export default CreateFeedPost;
