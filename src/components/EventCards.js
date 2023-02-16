import React from 'react';
import { View, Text ,StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';


const EventCards = ({imgUrl, title}) => {
	return (
		<TouchableOpacity>
            <View className=" flex-1 flex-row items-center justify-center mx-3 space-x-20 ">
                <Image
                    source={{
                        uri: imgUrl,
                    }}
                    className="h-40 w-40 rounded"
                />
                <View className=" items-center justify-center">
                    <Text>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
	);
}

const styles = StyleSheet.create({})

export default EventCards;
