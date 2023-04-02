import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Details({ route, navigation }) {
    const { post, result } = route.params
    return (
        <View className='bg-red-500 flex-1 justify-center items-center'>
            <Text>{result.seller}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
