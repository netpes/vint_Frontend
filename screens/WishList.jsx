import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../components/AppContext";
import wishlist from "../redux/wishlist";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native-elements";

export default function WishList() {
    const { wishList, setWishList } = useContext(AppContext)
    return (
        <View className='flex-1'>
            <View className='h-1/5 bg-primary border-b-2 border-b-secondary flex justify-center items-start pl-[20] pt-[47]'>
                <Text className='text-5xl font-bold text-secondary'>Wish List</Text>
            </View>
            <ScrollView>
                <View className='h-auto flex-row flex-wrap justify-between mt-2 px-2'>
                    {wishList.map((item, index) => (
                        <View key={index} className='h-[250] w-[190] bg-primary border-2 border-secondary mx-2 my-2 rounded-[10%] flex items-center'>
                            <Image source={{url: item.productImage}} className='h-[200] w-[150] mt-1' resizeMode="cover"/>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({});
