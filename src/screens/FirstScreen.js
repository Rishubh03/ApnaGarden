import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';

import { useGetGardensQuery } from '../../services/gardensApi';

const FirstScreen = ({ navigation }) => {
        return (
            <SafeAreaView className="flex-1 justify-center items-center bg-[#E6E6E6]">
                <Image
                    className="my-5 w-52 h-52 shadow-lg"
                    source={require('../../assets/images/first-page-logo.png')}
                />
                <Text className="font-semibold text-xl my-5">Welcome to Apna Garden</Text>

                <Text style={{ fontWeight: '400', fontSize: 13 }}>Lorem ipsum dolor sit amet,</Text>
                <Text style={{ fontWeight: '400', fontSize: 13 }}>consectetur adipiscing elit. Interdum</Text>
                <Text style={{ fontWeight: '400', fontSize: 13 }}>dictum tempus, interdum at dignissim</Text>
                <Text style={{ fontWeight: '400', fontSize: 13 }}>metus. Ultricies sed nunc.</Text>

                <Button title="Get Started" textColor="white" titleStyle={{ color: '#fff' }} style={{ backgroundColor: '#50C2C9', width: '90%', marginVertical: 25 }}
                    onPress={() => navigation.navigate('LoginScreen')}
                >Get Started</Button>

            </SafeAreaView>

        );
    }



export default FirstScreen