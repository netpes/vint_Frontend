import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SugFeed from '../screens/SugFeed';
import FolFeed from "../screens/FolFeed";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { EvilIcons, Entypo, Ionicons } from '@expo/vector-icons';

// import { Header, Icon } from 'react-native-elements';

const Tab = createMaterialTopTabNavigator()

export default function FeedNavigator() {
    const textColor = '#673AB7'
    return (
        <>
            <StatusBar style='dark' />
            <SafeAreaView className='bg-[#F5EFE8]' />
            <View className='h-[50] bg-[#F5EFE8] flex flex-row justify-between px-6 items-center'>
                <EvilIcons name="user" size={40} color='#978178' />
                <Image source={require('../assets/vintageV.png')} className='h-14 w-14' resizeMode="contain"/>
                <Ionicons name="chatbubble-outline" size={32} color='#978178' />
            </View>
            <Tab.Navigator
                screenOptions={({ navigation }) => ({
                    tabBarStyle: {
                        height: 50,
                        display: "flex",
                        justifyContent: "flex-end",
                        backgroundColor: "#F5EFE8",
                    },
                    tabBarLabelStyle: {
                        color: '#978178',
                        fontSize: 15,
                        fontWeight: "bold",
                        fontFamily: "Baskerville",
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: '#978178',
                        height: 4,
                        borderRadius: 10,
                        width: "30%",
                        marginLeft: "7.5%",
                    },
                })}
            >
                <Tab.Screen name="FOR YOU" component={SugFeed} />
                <Tab.Screen name="FOLLOWING" component={FolFeed} />
            </Tab.Navigator>
        </>
    );
}

const styles = StyleSheet.create({});
