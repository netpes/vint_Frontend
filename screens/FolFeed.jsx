import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Post from "../components/Post";

export default function SugFeed({ navigation }) {
    const prodArr = [
        {
            seller: "Fashion Hub",
            productName: "Blue Denim Jacket",
            productImage: "https://dummyimage.com/300x300/000/fff&text=Blue+Denim+Jacket",
            price: "$45.99",
            size: 'M',
        },
        {
            seller: "Trendy Threads",
            productName: "White Sneakers",
            productImage: "https://dummyimage.com/300x300/000/fff&text=White+Sneakers",
            price: "$29.99",
            size: 'M',
        },
        {
            seller: "Street Style Co.",
            productName: "Black Hoodie",
            productImage: "https://dummyimage.com/300x300/000/fff&text=Black+Hoodie",
            price: "$39.99",
            size: 'M',
        },
        {
            seller: "Fashionista",
            productName: "Red Plaid Skirt",
            productImage: "https://dummyimage.com/300x300/000/fff&text=Red+Plaid+Skirt",
            price: "$24.99",
            size: 'M',
        },
        {
            seller: "Urban Outfitters",
            productName: "Graphic Tee",
            productImage: "https://dummyimage.com/300x300/000/fff&text=Graphic+Tee",
            price: "$19.99",
            size: 'M',
        },
        {
            seller: "High Street Fashion",
            productName: "Leather Boots",
            productImage: "https://dummyimage.com/300x300/000/fff&text=Leather+Boots",
            price: "$69.99",
            size: 'M',
        },
    ];
    const renderItems = ({ item, index }) => {
        return (
            <View key={index} style={{ flex: 1, height: Dimensions.get('window').height - 200 }}>
                <Post
                    post={item}
                    navigation={navigation}
                />
            </View>
        )
    }
    const [indexCount, setIndexCount] = useState(0);
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async () => {
        setRefreshing(true)
        setReload(!reload)
        setRefreshing(false)
    }
    const handleAnalytics = () => {
        console.log(`post ${indexCount} is shown`)
    }
    console.log(indexCount);
    return (
        <View className='flex-1'>
            <FlatList
                data={prodArr}
                pagingEnabled
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItems}
                decelerationRate='fast'
                refreshing={refreshing}
                onRefresh={onRefresh}
                onMomentumScrollEnd={() => setIndexCount(indexCount + 1)}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
