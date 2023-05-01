import { Image, ImageBackground, Keyboard, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import jeansBG from "../assets/jeansbg.jpg";
import Vlogo from "../assets/vintageV.png"
import skyBG from "../assets/vbg.jpg";
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const styles = StyleSheet.create({
    logoShadow: {
      shadowColor: 'white', shadowOpacity: 1, shadowRadius: 8, shadowOffset: { width: 0, height: 0 }
    }
  })
  return (
    <Pressable className='flex-1' onPress={() => Keyboard.dismiss()}>
      <ImageBackground source={skyBG} resizeMode='cover' className="flex h-screen justify-around items-center bg-stone-400">
        {/* <View className='absolute top-0 h-full w-full bg-green-900/70' /> */}
        <SafeAreaView />
        <View className='flex h-1/3 justify-center items-center mt-16'>
          <Image source={Vlogo} resizeMode='contain' className='flex-1 w-96' />
        </View>
        <View className='h-2/3 w-full justify-start items-center mt-10 pt-10'>
          <View className='flex flex-row items-center justify-start h-14 px-3 w-3/4 border-b-4 border-b-black/10 rounded-lg mb-10'>
            <Entypo name="email" size={24} color="black" />
            <TextInput inputMode="email" placeholder="Email" placeholderTextColor='black' className='h-full w-full ml-2 text-xl text-white font-Baskerville' />
          </View>
          <View className='flex flex-row items-center justify-start h-14 px-3 w-3/4 border-b-4 border-b-black/10 rounded-lg mb-5'>
            <MaterialIcons name="lock" size={24} color="black" />
            <TextInput secureTextEntry placeholder="Password" placeholderTextColor='black' className='h-full w-full ml-2 text-xl text-white font-Baskerville' />
          </View>
          <TouchableOpacity><Text className='text-black/60 font-Baskerville text-base'>Forgot Password?</Text></TouchableOpacity>
          <TouchableOpacity className='mt-14 h-14 w-1/2 bg-black rounded-2xl flex justify-center items-center'><Text style={{ fontFamily: 'Baskerville' }} className='text-stone-200 font-bold text-xl'>Log In</Text></TouchableOpacity>
          <View className='dlex flex-row justify-center items-center mt-5'>
            <Text className='text-black/60 font-Baskerville text-base'>Don't have an account?  </Text>
            <TouchableOpacity onPress={() => navigation.navigate('register')}>
              <Text className='text-black/80 font-Baskerville text-xl'>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
