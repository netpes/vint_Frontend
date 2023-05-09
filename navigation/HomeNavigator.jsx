import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedNavigator from "./FeedNavigator";

import conBG from "../assets/concrete.jpg";

import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import ProdNavigator from "./ProdNavigator";
import WishList from "../screens/WishList";

export default function HomeNavigator() {
    const Tab = createBottomTabNavigator()
    const iconColor = '#978178'
    const activeColor = '#4D4D4D'
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: iconColor,
            tabBarActiveTintColor: activeColor,
            tabBarStyle: {
                height: 100,
                backgroundColor: "#F5EFE8",
                borderTopWidth: '1%',
                borderTopColor: iconColor
            },
        }}>
            <Tab.Screen name="Feed" component={ProdNavigator} options={{
                tabBarIcon: ({ color, size }) => (
                    <View className="flex justify-center items-center">
                        <Ionicons name="ios-shirt-outline" size={28} color={color} />
                    </View>
                ),
            }} />
            <Tab.Screen name="Search" component={ProdNavigator} options={{
                tabBarIcon: ({ color, size }) => (
                    <View className="flex justify-center items-center">
                        <Ionicons name="ios-search-outline" size={30} color={color} />
                    </View>
                ),
            }} />
            <Tab.Screen name="Post" component={ProdNavigator} options={{
                tabBarIcon: ({ color, size }) => (
                    <View className="flex justify-center items-center">
                        <Ionicons name="ios-add-circle-outline" size={30} color={color} />
                    </View>
                ),
            }} />
            <Tab.Screen name="WishList" component={WishList} options={{
                tabBarIcon: ({ color, size }) => (
                    <View className="flex justify-center items-center">
                        <Ionicons name="heart-outline" size={30} color={color} />
                    </View>
                ),
            }} />
            <Tab.Screen name="Profile" component={ProdNavigator} options={{
                tabBarIcon: ({ color, size }) => (
                    <View className="flex justify-center items-center">
                        <SimpleLineIcons name="user" size={25} color={color} />
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({});
