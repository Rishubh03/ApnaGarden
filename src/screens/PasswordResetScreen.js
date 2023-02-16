import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, Button } from 'react-native-paper';

import { useSendPasswordResetEmailMutation } from '../../services/userAuthApi';


const PasswordResetScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const clearTextInput = () => {
    setEmail('')
  }
  const [sendPasswordResetEmail] = useSendPasswordResetEmailMutation();

  const handleFormSubmit = async () => {
    const formdata = { email }
    const res = await sendPasswordResetEmail(formdata)
    if (res.data) {
      clearTextInput()
    }
    if (res.error) {
      clearTextInput()
      console.log(res.error)
    }
  }
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-[#E6E6E6] px-3">

      <Text className="text-2xl font-semibold mb-5">Reset Password!</Text>
      
      <TextInput className="w-full h-12"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        label="Please enter your registered email address"
        secureTextEntry={true}
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
      >Send</Button>

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

    </SafeAreaView>
  )
}

// const styles = ScaledSheet.create({
//   Container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: StatusBar.currentHeight,
//     backgroundColor: '#E6E6E6',
//     paddingHorizontal: 10,
//   },

//   titleText: {
//     fontSize: "22@ms",
//     fontWeight: "600",
//     fontStyle: "normal",
//     marginBottom: 20,
//   },

//   facebookButton: {
//     width: '90%',
//     borderRadius: 15,
//     backgroundColor: '#9EACCF',
//     marginBottom: 15,
//   },
//   googleButton: {
//     width: '90%',
//     borderRadius: 15,
//     backgroundColor: '#ECB6B5'
//   },
// })

export default PasswordResetScreen