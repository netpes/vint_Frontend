import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Details({ route, navigation }) {
    const { post } = route.params
    console.log(post);

    return (
        <View className='flex-1 items-center bg-gray-700'>
            <SafeAreaView />
            <View className='h-[60vh] w-[90vw] rounded-xl mt-6 mb-2'>
                <ScrollView horizontal pagingEnabled>
                    {post.moreImages.map((image, index) => (
                        <Image resizeMode="contain" key={index} source={{ uri: image }} className='h-[60vh] w-[90vw] rounded-xl shadow-md shadow-sky-200' />
                    ))}
                </ScrollView>
            </View>
            <Text>{post.seller}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
