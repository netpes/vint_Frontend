import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedNavigator from "./FeedNavigator";
import Details from "../screens/Details";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator()
export default function ProdNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: true
        }}>
            <Stack.Screen name='Feeds' component={FeedNavigator} />
            <Stack.Screen name='Details' component={Details} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});
