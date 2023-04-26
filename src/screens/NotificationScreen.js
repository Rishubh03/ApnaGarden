import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView,ScrollView} from 'react-native';
import { Text } from 'react-native-paper';
import NotificationCard from '../components/NotificationCard'
import { useSelector } from 'react-redux';

const Test = () => {
	const data = useSelector((state) => state.notification.notification_list)
	return (
		<SafeAreaView className="flex-1 px-2">
		{data.map((item => (
			<NotificationCard msg= {item} key={item} />
		)))
			}	

		</SafeAreaView>
	);
}

const styles = StyleSheet.create({})

export default Test;
