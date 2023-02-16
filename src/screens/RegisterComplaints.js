import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Card, Button, TextInput } from 'react-native-paper'

const RegisterComplaints = () => {
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
    return (
        <SafeAreaView className='flex-1 items-center justify-center bg-white' >
            <ScrollView className="flex w-11/12 p-2 space-y-3 " >
                <Card>
                    <View className="flex-row space-x-4 justify-evenly p-4 ">
                        <View className="justify-center" >
                            <Text className=" text-center  " >Name</Text>
                        </View>
                        <TextInput className="w-4/5"
                        />
                    </View>
                </Card>
                <Card>
                    <View className="flex-row space-x-4 justify-evenly p-4 ">
                        <View className="justify-center" >
                            <Text className=" text-center" >Mobile Number</Text>
                        </View>
                        <TextInput className="w-4/5"
                            keyboardType='number-pad'
                        />
                    </View>
                </Card>
                <Card>
                    <View className="flex-row space-x-4 justify-evenly p-4 ">
                        <View className="justify-center" >
                            <Text className=" text-center" >Address</Text>
                        </View>
                        <TextInput className="w-4/5"
                        />
                    </View>
                </Card>
                <Card>
                    <View className="flex-row space-x-4 justify-evenly p-4 ">
                        <View className="justify-center" >
                            <Text className=" text-center" >Zone Name</Text>
                        </View>
                        <TextInput className="w-4/5"

                        />
                    </View>
                </Card>
                <Card>
                    <View className="flex-row space-x-4 justify-evenly p-4 ">
                        <View className="justify-center" >
                            <Text className=" text-center" >Garden Name</Text>
                        </View>
                        <TextInput className="w-4/5"

                        />
                    </View>
                </Card>
                <Card>
                    <View className="flex-col space-x-4 justify-evenly p-4 ">
                        <View className="justify-center" >
                            <Text className=" text-center text-2xl" >Complaints</Text>
                        </View>
                        <TextInput className="w-11/12"
                            editable
                            multiline
                            numberOfLines={10}
                            maxLength={50}
                            value={value}

                        />
                    </View>
                </Card>
                <View>
                    <Button
                        mode='contained'
                        onPress={() => console.log('thank you for your valuable time')}
                    >
                        Submit
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterComplaints