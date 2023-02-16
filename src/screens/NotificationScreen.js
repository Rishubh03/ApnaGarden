import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView,ScrollView} from 'react-native';
import { Text } from 'react-native-paper';
import {NotificationCard} from '../index'

const Test = () => {
	return (
		<SafeAreaView className="flex-1 px-2">	
			<NotificationCard msg="Your Complaint has been Registered" />
			<NotificationCard msg="Your account created successfully" />

		</SafeAreaView>
	);
}

const styles = StyleSheet.create({})

export default Test;
