import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PostViewScreen from './PostViewScreen';
import MyPostScreen from './MyPostScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


const FeedNavigatorScreen = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: true }}>
			<Tab.Screen name="View Posts" component={PostViewScreen}/>
			<Tab.Screen name="My Posts" component={MyPostScreen} />
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({})

export default FeedNavigatorScreen;
