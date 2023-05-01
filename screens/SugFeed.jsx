import { Dimensions, FlatList, RefreshControl, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import Post from "../components/Post";

export default function SugFeed({ navigation }) {
    const prodArr = [
        {
            seller: "Fashion Point",
            productName: "Black Leather Jacket",
            productImage: "https://cdna.lystit.com/photos/urbanoutfitters/b8415ce9/urban-outfitters-designer-Washed-Black-Ice-Cube-Good-Day-Vintage-Tee.jpeg",
            moreImages: ["https://cdn.shopify.com/s/files/1/0588/4900/1651/products/Group196_1445x.png?v=1660588236", "https://cdn.shopify.com/s/files/1/0588/4900/1651/products/Group196_1445x.png?v=1660588236", "https://dummyimage.com/300x300/000/fff&text=Yellow+Midi+Dress"],
            price: "$59.99",
            size: 'XXL'
        },
        {
            seller: "Trendy Threads",
            productName: "Red High Heels",
            productImage: "https://cdn.shopify.com/s/files/1/0588/4900/1651/products/Group196_1445x.png?v=1660588236",
            moreImages: [],
            price: "$49.99",
            size: 'XXL'
        },
        {
            seller: "Street Style Co.",
            productName: "Green Camo Pants",
            productImage: "https://img.joomcdn.net/d6df7361b0adc499e055e2fddff466f80be9ea95_original.jpeg",
            moreImages: [],
            price: "$34.99",
            size: 'XXL'
        },
        {
            seller: "Fashionista",
            productName: "Yellow Midi Dress",
            productImage: "https://dummyimage.com/300x300/000/fff&text=Yellow+Midi+Dress",
            moreImages: [],
            price: "$39.99",
            size: 'XXL'
        },
        {
            seller: "Urban Outfitters",
            productName: "White Cropped Top",
            productImage: "https://dummyimage.com/300x300/000/fff&text=White+Cropped+Top",
            moreImages: [],
            price: "$14.99",
            size: 'XXL'
        },
        {
            seller: "High Street Fashion",
            productName: "Blue Skinny Jeans",
            productImage: "https://dummyimage.com/300x300/000/fff&text=Blue+Skinny+Jeans",
            moreImages: [],
            price: "$29.99",
            size: 'XXL'
        },
        {
            seller: "Fashion Hub",
            productName: "Pink Sweatshirt",
            productImage: "https://dummyimage.com/300x300/000/fff&text=Pink+Sweatshirt",
            moreImages: [],
            price: "$24.99",
            size: 'XXL'
        },
        {
            seller: "Chic Boutique",
            productName: "Beige Knit Sweater",
            productImage: "https://dummyimage.com/300x300/000/fff&text=Beige+Knit+Sweater",
            moreImages: [],
            price: "$44.99",
            size: 'XXL'
        },
    ];
    const [visibleIndex, setVisibleIndex] = useState(0);
    const renderItems = ({ item, index }) => {
        return (
            <View key={index} style={{ flex: 1, height: Dimensions.get('window').height - 300 }}>
                <Post
                    post={item}
                    navigation={navigation}
                />
            </View>
        )
    }
    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            console.log('Currently visible item:', viewableItems[0].item);
        }
    }).current;
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
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor='#0b9b8a'
                    />
                }
                onViewableItemsChanged={onViewableItemsChanged}
                onMomentumScrollEnd={() => setIndexCount(indexCount + 1)}
                windowSize={3}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
