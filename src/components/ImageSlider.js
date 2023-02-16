import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const ImageSlider = ({imgUrl}) => {
	return (
		<View className="mx-1">
			<Image
                className="w-80 h-44 rounded-xl"
                source={imgUrl}
            />
		</View>
	);
}

const styles = StyleSheet.create({})

export default ImageSlider;
