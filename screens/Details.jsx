import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Details({ route, navigation }) {
    const { post } = route.params
    console.log(post);

    return (
        <View className='bg-red-500 flex-1 justify-center items-center'>
            <SafeAreaView />
            <View className='h-1/2 w-1/4'>
                <ScrollView horizontal pagingEnabled>
                    {post.moreImages.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image }}
                            style={{ width: 200, height: 200 }}
                        />
                    ))}
                </ScrollView>
            </View>
            <Text>{post.seller}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
