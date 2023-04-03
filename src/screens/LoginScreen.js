import { View, StyleSheet, Image, TouchableWithoutFeedback, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from '../../services/userAuthApi'
import { storeToken } from '../../services/AsyncStorageService';
import { setUserAccessToken } from '../../features/authSlice';
import Toast from 'react-native-toast-message';
import { ToastConfig } from 'react-native-toast-message';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [secureEntry, setSecureEntry] = useState(true)

    const toggleSecureEntry = () => {
        setSecureEntry(!secureEntry)    // Toggle Secure Entry
    }

    const clearTextInput = () => {
        setEmail('')
        setPassword('')
    }

    const [loginUser] = useLoginUserMutation()

    const handleFormSubmit = async()  => {
        const formData = { email, password }
        const res = await loginUser(formData)
        if (res.data) {
            await storeToken(res.data.token)  // Store Token in Storage
            clearTextInput()
            navigation.navigate('MainScreen')
        }
        if (res.error) {
            Toast.show({
                type: 'error',
                text1: 'Either email or password is incorrect',
                visibilityTime: 4000,
                autoHide: true,
                topOffset: 30,
                bottomOffset: 40,
            })
        }
    }

    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-white px-3">
            <Toast />
            <Text className="text-2xl font-bold">Welcome Back!</Text>
            <Image
                className="my-5 w-80 h-56"
                source={require('../../assets/images/first-page-logo.png')}
            />

            <TextInput className="w-full h-12"
                mode="outlined"
                value={email}
                onChangeText={setEmail}
                label=" Email Address"
                activeOutlineColor="#50C2C9"
                style={{ marginVertical: 5, backgroundColor: 'white' }}
                outlineStyle={{ borderColor: '#50C2C9', borderRadius: 7, borderWidth: 2 }}
            />

            <TextInput className="w-full h-12"
                mode="outlined"
                value={password}
                onChangeText={setPassword}
                label=" Password"
                secureTextEntry={secureEntry}
                right={<TextInput.Icon icon={secureEntry ? "eye" : "eye-off"} onPress = {toggleSecureEntry} />}
                activeOutlineColor="#50C2C9"
                style={{ marginVertical: 5, backgroundColor: 'white' }}
                outlineStyle={{ borderColor: '#50C2C9', borderRadius: 7, borderWidth: 2 }}
            />

            <TouchableWithoutFeedback onPress={() => { navigation.navigate("PasswordResetScreen") }}>
                <Text className="font-medium font-base my-2 text-blue-600">Forgot your password?</Text>
            </TouchableWithoutFeedback>

            <Button title="Login" mode='outlined'
                labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
                textColor="white"
                style={{ backgroundColor: '#50C2C9', width: '100%', marginVertical: 5, borderColor: '#50C2C9', borderRadius: 25, borderWidth: 2 }}
                onPress={handleFormSubmit}
            >LOGIN</Button>

            <Text className="text-base font-medium my-2">Or login using social media</Text>


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

            <TouchableWithoutFeedback onPress={() => { navigation.navigate("RegistrationScreen") }}>

                <Text onPress={() => { navigation.navigate("RegistrationScreen") }} className="text-base font-semibold my-3">Don’t have an account ? <Text className="text-blue-600">Sign Up</Text></Text>

            </TouchableWithoutFeedback>


        </SafeAreaView>
    )
}


// const styles = StyleSheet.create({
//     Container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingTop: StatusBar.currentHeight,
//         backgroundColor: '#E6E6E6',
//         paddingHorizontal: 10,
//     },

//     icon: {
//         marginVertical: 20,
//         width: 200,
//         height: 170,
//     },

//     titleText: {
//         fontSize: "18@ms",
//         fontWeight: "600",
//         fontStyle: "normal",

//     },

//     Forgot: {
//         fontSize: '16@ms',
//         fontWeight: '600',
//         marginVertical: 10,
//     },

//     socialLogin: {
//         fontSize: '16@ms',
//         fontWeight: '500',
//         marginVertical: 10,
//     },

//     facebookButton: {
//         width: '90%',
//         borderRadius: 15,
//         backgroundColor: 'blue',
//         marginBottom: 15,
//     },
//     googleButton: {
//         width: '90%',
//         borderRadius: 15,
//         backgroundColor: 'red'
//     },

//     LoginButton: {
//         alignItems: 'center',
//         justifyContent: 'center',

//     },

//     register: {
//         fontSize: '16@ms',
//         fontWeight: '600',
//         marginVertical: 10,
//     },
// })


export default LoginScreen