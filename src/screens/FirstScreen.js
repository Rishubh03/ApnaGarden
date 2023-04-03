import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';

import { useGetGardensQuery } from '../../services/gardensApi';

const FirstScreen = ({ navigation }) => {
        return (
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
                <Image
                    className="my-5 w-80 h-60 shadow-lg"
                    source={require('../../assets/images/first-page-logo.png')}
                />
                <Text className="font-semibold text-2xl my-2">Welcome to Apna Garden</Text>

                <Text style={{ fontWeight: '400', fontSize: 15 }}>" Discover and explore your city's </Text>
                <Text style={{ fontWeight: '400', fontSize: 15 }}>green spaces with ease! "</Text>
                

                <Button title="Get Started" textColor="white" titleStyle={{ color: '#fff' }} style={{ backgroundColor: '#50C2C9', width: '90%', marginVertical: 25 }}
                    onPress={() => navigation.navigate('LoginScreen')}
                >Get Started</Button>

            </SafeAreaView>

        );
    }



export default FirstScreen