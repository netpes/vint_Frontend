import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SugFeed from '../screens/SugFeed';
import FolFeed from "../screens/FolFeed";
import { StatusBar } from "expo-status-bar";

const Tab = createMaterialTopTabNavigator()

export default function FeedNavigator() {
    const textColor = '#0b9b8a'
    return (
        <>
            <StatusBar style='dark' />
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        height: 100,
                        display: "flex",
                        justifyContent: "flex-end",
                        backgroundColor: "#ededee",
                    },
                    tabBarLabelStyle: {
                        color: textColor,
                        fontSize: 15,
                        fontWeight: "bold",
                        fontFamily: "PingFangSC-Medium",
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: textColor,
                        height: 2,
                        borderRadius: 10,
                        width: "30%",
                        marginLeft: "7.5%",
                    },
                }}
            >
                <Tab.Screen name="FOR YOU" component={SugFeed} />
                <Tab.Screen name="FOLLOWING" component={FolFeed} />
            </Tab.Navigator>
        </>
    );
}

const styles = StyleSheet.create({});
