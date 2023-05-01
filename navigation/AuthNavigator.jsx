import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

export default function AuthNavigator({ navigaiton }) {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: false
        }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
    )
}
