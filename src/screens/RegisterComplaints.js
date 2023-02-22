import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Card, Button, TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown';
import { useGetGardensQuery } from '../../services/gardensApi';
import { useSelector } from 'react-redux';
import {useRegisterComplaintMutation} from '../../services/complaintApi'

const RegisterComplaints = ({navigation}) => {
    const token = useSelector(state => state.auth.access_token)
    const { data, isSuccess } = useGetGardensQuery();
    const [garden, setGarden] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [registerComplaint] = useRegisterComplaintMutation()
    const handleFormSubmit = async () => {
        const complaint = {garden, title, details}
        const res = await registerComplaint({complaint,token})
        if (res.data) {
            console.log(res.data)
            navigation.navigate('HomeScreen')
        }else {
            console.log(res.error)
        }
    }           

    if (isSuccess) {
        const firstData = [];
        data.map((garden => (
            firstData.push({ label: garden.garden_name, value: garden.id })
        )))

        return (
            <SafeAreaView className='flex-1 items-center justify-center bg-white' >
                <ScrollView className="flex w-11/12 p-2 space-y-3 " >
                    <Text className="text-black text-2xl font-semibold pt-4">Select a Garden</Text>
                    <Dropdown
                        data={firstData}
                        search
                        maxHeight={300}
                        style={{
                            backgroundColor: 'white',
                            borderColor: 'gray',
                            borderWidth: 0,
                            marginTop: 10,
                        }}
                        itemTextStyle={{
                            color: 'gray',
                        }}
                        activeColor="gray"
                        labelField="label"
                        valueField="value"
                        searchPlaceholder="Search"
                        value={garden}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setGarden(item.value);
                        }}
                    />

                    <TextInput className="w-full h-12"
                        mode="outlined"
                        value={title}
                        onChangeText={setTitle}
                        label="Complaint Title"
                        activeOutlineColor="#50C2C9"
                        style={{ marginVertical: 5, backgroundColor: 'white' }}
                        outlineStyle={{ borderColor: '#50C2C9', borderRadius: 7, borderWidth: 2 }}
                    />

                    <TextInput className="w-full"
                        multiline={true}
                        mode="outlined"
                        value={details}
                        onChangeText={setDetails}
                        label="Complaint Details"
                        numberOfLines={5}
                        activeOutlineColor="#50C2C9"
                        style={{ marginVertical: 5, backgroundColor: 'white' }}
                        outlineStyle={{ borderColor: '#50C2C9', borderRadius: 7, borderWidth: 2 }}
                    />


                    <Button title="Submit" mode='outlined'
                        labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
                        textColor="white"
                        style={{ backgroundColor: '#50C2C9', width: '100%', marginVertical: 5, borderColor: '#50C2C9', borderRadius: 25, borderWidth: 2 }}
                        onPress={handleFormSubmit}
                    >Submit</Button>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default RegisterComplaints