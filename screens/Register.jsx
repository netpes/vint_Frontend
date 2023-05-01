import { Image, ImageBackground, Keyboard, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import jeansBG from "../assets/jeansbg.jpg";
import Vlogo from "../assets/vintageV.png"
import BG from "../assets/vbg.jpg";
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  return (
    <Pressable className='flex-1' onPress={() => Keyboard.dismiss()}>
      <ImageBackground source={BG} resizeMode='cover' className="flex h-screen justify-around items-center bg-stone-400">
        <SafeAreaView />
        <View className='flex h-1/3 justify-center items-center mt-16'>
          <Image source={Vlogo} resizeMode='contain' className='flex-1 w-96' />
        </View>
        <View className='h-2/3 w-full justify-start items-center pt-10'>
          <View className='flex flex-row items-center justify-start h-14 px-3 w-3/4 border-b-4 border-b-black/10 rounded-lg mb-5'>
            <Entypo name="email" size={24} color="black" />
            <TextInput inputMode="text" placeholder="User Name" placeholderTextColor='black' className='h-full w-full ml-2 text-xl text-white font-Baskerville' />
          </View>
          <View className='flex flex-row items-center justify-start h-14 px-3 w-3/4 border-b-4 border-b-black/10 rounded-lg mb-5'>
            <Entypo name="email" size={24} color="black" />
            <TextInput inputMode="email" placeholder="Email" placeholderTextColor='black' className='h-full w-full ml-2 text-xl text-white font-Baskerville' />
          </View>
          <View className='flex flex-row items-center justify-start h-14 px-3 w-3/4 border-b-4 border-b-black/10 rounded-lg mb-5'>
            <Entypo name="email" size={24} color="black" />
            <TextInput inputMode="tel" placeholder="Phone" placeholderTextColor='black' className='h-full w-full ml-2 text-xl text-white font-Baskerville' />
          </View>
          <View className='flex flex-row items-center justify-start h-14 px-3 w-3/4 border-b-4 border-b-black/10 rounded-lg mb-5'>
            <Entypo name="email" size={24} color="black" />
            <TextInput inputMode="text" placeholder="Password" placeholderTextColor='black' className='h-full w-full ml-2 text-xl text-white font-Baskerville' />
          </View>
          <View className='flex flex-row items-center justify-start h-14 px-3 w-3/4 border-b-4 border-b-black/10 rounded-lg mb-5'>
            <Entypo name="email" size={24} color="black" />
            <TextInput inputMode="text" placeholder="Confirm Password" placeholderTextColor='black' className='h-full w-full ml-2 text-xl text-white font-Baskerville' />
          </View>
          <TouchableOpacity className='mt-3'><Text className='text-white/60 '>Forgot Password?</Text></TouchableOpacity>
          <TouchableOpacity className='mt-7 h-14 w-1/2 bg-white/70 rounded-2xl flex justify-center items-center'><Text>Lets Go</Text></TouchableOpacity>
          <View className='dlex flex-row justify-center items-center mt-5'>
            <Text className='text-white/60 '>Already have an account?  </Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text className='text-white/80 '>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </TouchableWithoutFeedback> */}
      </ImageBackground>
    </Pressable>
  );
}

