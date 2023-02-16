import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen, FeedNavigatorScreen, NotificationScreen } from '../index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Test from './Test';

const Tab = createBottomTabNavigator();

const MainNavigatorScreen = () => {
	return (
		<Tab.Navigator initialRouteName='Home'>


			<Tab.Screen name="HomeScreen" component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Entypo name="home" color='#1F83B4' size={size} />),
					tabBarActiveBackgroundColor: '#E6E6E6',
					tabBarLabelStyle: { fontSize: 12, },
					title: 'Home',
				}}
			/>

			<Tab.Screen name="Feeds" component={FeedNavigatorScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Entypo name="grid" color='#1F83B4' size={size} />),
					tabBarActiveBackgroundColor: '#E6E6E6',
					tabBarLabelStyle: { fontSize: 12, },
					title: 'Feeds',
				}}
			/>
			<Tab.Screen name="Notification" component={NotificationScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="bell" color='#1F83B4' size={size} />),
					tabBarActiveBackgroundColor: '#E6E6E6',
					tabBarLabelStyle: { fontSize: 12, },
					title: 'Notification',
				}}
			/>

			<Tab.Screen name="Profile" component={ProfileScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account" color='#1F83B4' size={size} />),
					tabBarActiveBackgroundColor: '#E6E6E6',
					tabBarLabelStyle: { fontSize: 12, },
					title: 'Profile',
				}}
			/>



			{/* <Tab.Screen name = "Test" component={Test} options={{headerShown:false}}/>	 */}

		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({})

export default MainNavigatorScreen;
