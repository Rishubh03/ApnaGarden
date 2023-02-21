import {View, Text } from "react-native"

const toastConfig = {
	warning: ({ text1, props }) => (
	  <View className="w-full bg-orange-400 p-2 h-7">
		<Text>{text1}</Text>
		<Text>{props.uuid}</Text>
	  </View>
	),
	done: ({ text1, props }) => (
	  <View className="w-full bg-orange-400 p-2 h-7">
		<Text>{text1}</Text>
		<Text>{props.uuid}</Text>
	  </View>
	),
  };

export default toastConfig;