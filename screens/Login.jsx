import { Image, ImageBackground, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import jeansBG from "../assets/jeansbg.jpg";
import Vlogo from "../assets/V.png"
import skyBG from "../assets/skyBG.jpg";
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const styles = StyleSheet.create({
    logoShadow: {
      shadowColor: 'white', shadowOpacity: 1, shadowRadius: 8, shadowOffset: { width: 0, height: 0 }
    }
  })
  return (
    <ImageBackground source={skyBG} resizeMode='cover' className="flex h-screen justify-around items-center bg-sky-800">
      {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
      <View className='absolute top-0 h-full w-full bg-green-900/70' />
      <SafeAreaView />
      <View className='flex h-1/3 justify-center items-center mt-10'>
        <Image source={Vlogo} style={styles.logoShadow} resizeMode='contain' className='flex-1 w-96' />
      </View>
      <View className='h-2/3 w-full justify-start items-center'>
        <View className='flex flex-row items-center justify-start h-14 px-3 w-3/4 bg-white/10 border-b-4 border-b-white rounded-lg mb-10'>
          <Entypo name="email" size={24} color="white" />
          <TextInput inputMode="email" placeholder="Email" placeholderTextColor='white' className='h-full w-full ml-2 text-base text-white' />
        </View>
        <View className='flex flex-row items-center justify-start h-14 px-3 w-3/4 bg-white/10 border-b-4 border-b-white rounded-lg mb-10'>
          <MaterialIcons name="lock" size={24} color="white" />
          <TextInput secureTextEntry placeholder="Password" placeholderTextColor='white' className='h-full w-full ml-2 text-base text-white' />
        </View>
        <TouchableOpacity className='mt-5'><Text className='text-white/60 '>Forgot Password?</Text></TouchableOpacity>
        <TouchableOpacity style={styles.logoShadow} className='mt-10 h-14 w-1/2 bg-white/70 rounded-2xl flex justify-center items-center'><Text>Lets Go</Text></TouchableOpacity>
        <View className='dlex flex-row justify-center items-center mt-5'>
          <Text className='text-white/60 '>Don't have an account?  </Text>
          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text className='text-white/80 '>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
