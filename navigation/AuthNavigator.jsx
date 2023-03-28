import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/loginSignup/Login";
import Register from "../screens/loginSignup/Register";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  <Stack.Navigator>
    <Stack.Screen name="login" component={Login}/>
    <Stack.Screen name="register" component={Register}/>
  </Stack.Navigator>
}
