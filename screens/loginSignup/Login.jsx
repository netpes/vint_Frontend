import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Login({navigation}) {    
  return (
      <ImageBackground source={jeansBG} resizeMode='cover' className="h-screen flex justify-center items-center">
          <View className='absolute h-full w-full bg-black/60' />
      </ImageBackground>
  );
}

const styles = StyleSheet.create({});
