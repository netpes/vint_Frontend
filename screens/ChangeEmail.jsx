import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Fontisto, Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { Alert } from 'react-native';


const ChangeEmail = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    function checkPassword() {
        console.log(password)
        if (password === '') {
            Alert.alert(
                'Please enter your password',
                '',
                [
                    {
                        text: 'Ok',
                        style: 'cancel'
                    }
                ],
                { cancelable: true }
            )
        }
        else if (password === '123') {
            setLoading(true)
            setTimeout(() => {
                setAuthenticated(true)
                setLoading(false)
            }, 2000);
        }
        else if (password !== '' && password !== '123') {
            setLoading(true)
            setTimeout(() => {
                setAuthenticated(false)
                setLoading(false)
                Alert.alert(
                    'Wrong Password',
                    '',
                    [
                        {
                            text: 'Ok',
                            style: 'cancel'
                        }
                    ],
                    { cancelable: true }
                )
            }, 2000);
            setPassword('');
        }
    }

    return (
        <View className='h-full w-full flex-col'>
            <View className='flex-[1] w-full h-16 justify-center items-center'>
                <Text className='font-bold text-2xl'>Email Settings</Text>
            </View>
            <View className='flex-[6] w-full justify-center'>
                <View className='h-12 w-full items-center justify-start'>
                    <Fontisto name="locked" size={24} color="black" />
                </View>
                {
                    (authenticated === false && loading === false) &&

                    <View className='w-full items-center flex-col'>
                        <Text className='text-lg'>Please Enter Password:</Text>
                        <TextInput className='h-12 w-3/5 bg-slate-50 border px-2 text-lg rounded-md mt-2' onChangeText={(text) => setPassword(text)} />
                        <TouchableOpacity className='h-10 w-1/4 items-center justify-center bg-sky-700 rounded-md mt-2' onPress={() => checkPassword()}>
                            <Text className='text-white text-lg'>Submit</Text>
                        </TouchableOpacity>
                    </View>
                }
                {
                    (loading === true) &&
                    <View className='w-full items-center justify-center flex-col'>
                        <LottieView
                            source={require('../assets/lottieLoader.json')}
                            style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center' }}
                            autoPlay
                        />
                        <Text>Authenticating...</Text>
                    </View>

                }
                {
                    (authenticated === true && loading === false) &&

                    < View className='w-full items-center flex-col'>
                        <Text className='text-lg'>Enter Your New Email:</Text>
                        <TextInput value={email} className='h-12 w-3/5 bg-slate-50 border px-2 text-lg rounded-md mt-2' onChangeText={(text) => setEmail(text)} />
                        <TouchableOpacity className='h-10 w-2/5 items-center justify-center bg-emerald-500 rounded-md mt-2' onPress={() => setEmail('')}>
                            <Text className='text-white text-md'>Set New Email</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    )
}

export default ChangeEmail