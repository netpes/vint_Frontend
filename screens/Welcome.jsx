import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Vgif from '../assets/V.gif'
import jeansBG from '../assets/jeansbg.jpg'
import jeans from '../assets/jeans.jpg'
import { StatusBar } from "expo-status-bar";

export default function Welcome({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            // navigation.navigate('Auth')
        }, 2000)
    }, [])
    return (
        <ImageBackground source={jeansBG} resizeMode='cover' className="h-screen flex justify-center items-center">
            <View className='absolute h-full w-full bg-black/60'/>
            <StatusBar style="light"/>
            <Image source={Vgif} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({});
