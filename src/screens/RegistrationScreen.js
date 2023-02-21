import { View, Image, StyleSheet, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import React, { useState } from 'react'


import { useRegisterUserMutation } from '../../services/userAuthApi';
import { storeToken } from '../../services/AsyncStorageService';

const RegistrationScreen = ({ navigation }) => {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const [secureEntry1, setSecureEntry1] = useState(true);
    const [secureEntry2, setSecureEntry2] = useState(true);

    const toggleSecureEntry1 = () => {
        setSecureEntry1(!secureEntry1)    // Toggle Secure Entry
    }

    const toggleSecureEntry2 = () => {
        setSecureEntry2(!secureEntry2)    // Toggle Secure Entry
    }

    const clearTextInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setPassword2('')
    }

    const [registerUser] = useRegisterUserMutation()

    const handleFormSubmit = async () => {
        const formData = { firstname, lastname, email, password, password2 }
        const res = await registerUser(formData)
        if (res.data) {
            await storeToken(res.data.token)  // Store Token in Storage
            clearTextInput()
            navigation.navigate('LoginScreen')
        }
        if (res.error) {
            console.log(res.error);
        }
    }

    return (
        <SafeAreaView className="flex-1 justify-center items-center  bg-[#E6E6E6]  px-3">

            <Text className="text-2xl font-bold py-10">Welcome Onboard!</Text>
            <View className="flex-row justify-between w-full space-x-1">

                <TextInput
                    className="w-6/12 h-12"
                    label="First name"
                    mode="outlined"
                    value={firstname}
                    onChangeText={setFirstName}
                    activeOutlineColor="#50C2C9"
                    style={{ marginVertical: 5, backgroundColor: '#E6E6E6' }}
                    outlineStyle={{ borderColor: '#50C2C9', borderRadius: 7, borderWidth: 2 }}
                />

                <TextInput
                    className="w-6/12 h-12"
                    label="Last name"
                    mode="outlined"
                    value={lastname}
                    onChangeText={setLastName}
                    activeOutlineColor="#50C2C9"
                    style={{ marginVertical: 5, backgroundColor: '#E6E6E6' }}
                    outlineStyle={{ borderColor: '#50C2C9', borderRadius: 7, borderWidth: 2 }}
                />

            </View>


            <TextInput className="w-full h-12"
                mode="outlined"
                value={email}
                onChangeText={setEmail}
                label=" Enter your email"
                activeOutlineColor="#50C2C9"
                style={{ marginVertical: 5, backgroundColor: '#E6E6E6' }}
                outlineStyle={{ borderColor: '#50C2C9', borderRadius: 7, borderWidth: 2 }}
            />

            <TextInput
                className="w-full h-12"
                mode="outlined"
                label=" Enter password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureEntry1}
                right={<TextInput.Icon icon={secureEntry1 ? "eye" : "eye-off"} onPress={toggleSecureEntry1} />}
                activeOutlineColor="#50C2C9"
                style={{ marginVertical: 5, backgroundColor: '#E6E6E6' }}
                outlineStyle={{ borderColor: '#50C2C9', borderRadius: 7, borderWidth: 2 }}
            />

            <TextInput
                className="w-full h-12"
                mode="outlined"
                label=" Confirm Password"
                value={password2}
                onChangeText={setPassword2}
                secureTextEntry={secureEntry2}
                right={<TextInput.Icon icon={secureEntry2 ? "eye" : "eye-off"} onPress={toggleSecureEntry2} />}
                activeOutlineColor="#50C2C9"
                style={{ marginVertical: 5, backgroundColor: '#E6E6E6' }}
                outlineStyle={{ borderColor: '#50C2C9', borderRadius: 7, borderWidth: 2 }}
            />

            <Button title="Register"
                mode='outlined'
                labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
                textColor="white"
                style={{ backgroundColor: '#50C2C9', width: '100%', marginVertical: 15, borderColor: '#50C2C9', borderRadius: 25, borderWidth: 2 }}
                onPress={handleFormSubmit}
            >Register</Button>

            <Text style={{ fontWeight: '600', alignSelf: 'center', marginVertical: 5, fontSize: 16 }}>Or</Text>

            <Button
                labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
                textColor="white"
                style={{ backgroundColor: '#1178F2', width: '100%', marginVertical: 5, borderRadius: 25, borderWidth: 2 }}
            >Sign In with Facebook</Button>

            <Button
                labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
                textColor="white"
                style={{ backgroundColor: '#FF3E30', width: '100%', marginVertical: 5, borderRadius: 25, borderWidth: 2 }}
            >Sign In with Google</Button>

            <TouchableWithoutFeedback onPress={() => { navigation.navigate("LoginScreen") }}>
                <Text className="font-semibold items-center my-3 text-base" style={{ fontWeight: '600', alignSelf: 'center', marginVertical: 10, fontSize: 16 }}>Already have an account? <Text className="text-blue-600">Sign In</Text> </Text>
            </TouchableWithoutFeedback>

        </SafeAreaView >
    )
}



// 

export default RegistrationScreen