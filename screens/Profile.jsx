import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import renderItem from '../actions/GetProfilePosts';
import StarRating from 'react-native-star-rating';


const Profile = () => {

    const posts = [
        {
            name: 't-shirt',
            price: '99$',
            media: 'https://img.ltwebstatic.com/images3_pi/2022/06/22/165589750866cdc9198a13694fdf9324654d6b787d_thumbnail_405x552.webp'
        },
        {
            name: 'pants',
            price: '199$',
            media: 'https://img.ltwebstatic.com/images3_pi/2022/06/22/165589750866cdc9198a13694fdf9324654d6b787d_thumbnail_405x552.webp'
        },
        {
            name: 'Nike t-shirt',
            price: '79$',
            media: 'https://img.ltwebstatic.com/images3_pi/2022/06/22/165589750866cdc9198a13694fdf9324654d6b787d_thumbnail_405x552.webp'
        },
        {
            name: 'Balenciaga t-shirt',
            price: '399$',
            media: 'https://img.ltwebstatic.com/images3_pi/2022/06/22/165589750866cdc9198a13694fdf9324654d6b787d_thumbnail_405x552.webp'
        },
        {
            name: 'Diesel Jeans',
            price: '299$',
            media: 'https://img.ltwebstatic.com/images3_pi/2022/06/22/165589750866cdc9198a13694fdf9324654d6b787d_thumbnail_405x552.webp'
        },
        {
            name: 'fleece Jacket',
            price: '149$',
            media: 'https://img.ltwebstatic.com/images3_pi/2022/06/22/165589750866cdc9198a13694fdf9324654d6b787d_thumbnail_405x552.webp'
        },
        {
            name: 'polo shirt',
            price: '34$',
            media: 'https://img.ltwebstatic.com/images3_pi/2022/06/22/165589750866cdc9198a13694fdf9324654d6b787d_thumbnail_405x552.webp'
        },
        {
            name: 'Adidas t-shirt',
            price: '69$',
            media: 'https://img.ltwebstatic.com/images3_pi/2022/06/22/165589750866cdc9198a13694fdf9324654d6b787d_thumbnail_405x552.webp'
        },
        {
            name: 'jacket',
            price: '119$',
            media: 'https://img.ltwebstatic.com/images3_pi/2022/06/22/165589750866cdc9198a13694fdf9324654d6b787d_thumbnail_405x552.webp'
        },
        {
            name: 'Adidas t-shirt',
            price: '69$',
            media: 'https://img.ltwebstatic.com/images3_pi/2022/06/22/165589750866cdc9198a13694fdf9324654d6b787d_thumbnail_405x552.webp'
        },
        {
            name: 'jacket',
            price: '119$',
            media: 'https://img.ltwebstatic.com/images3_pi/2022/06/22/165589750866cdc9198a13694fdf9324654d6b787d_thumbnail_405x552.webp'
        },
    ]

    return (
        <View className='h-full w-full bg-sky-900'>
            <SafeAreaView />
            <View className='flex-[3]'>
                <View className='flex-[2] flex-row w-full justify-between items-center border-b px-4'>
                    <TouchableOpacity>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} className='w-10 h-10 rounded-full' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="settings-outline" size={32} color="black" />
                    </TouchableOpacity>
                </View>
                <View className='flex-[7]'>
                    <View className='flex-[2] items-center justify-center'>
                        <Text className='text-white text-xl font-medium'>Full Name</Text>
                        <Text className='text-gray-500 text-xs font-medium'>@UserName</Text>
                    </View>
                    <View className='flex-[4] flex-row items-center justify-center py-2 bg-sky-900'>
                        <View className='flex-1 h-full items-center justify-evenly'>
                            <View className='items-center justify-center'>
                                <Text className='text-white text-sm font-medium'>AVG Review</Text>
                                <StarRating
                                    containerStyle={{ width: '30%' }}
                                    disabled={false}
                                    emptyStar={'ios-star-outline'}
                                    emptyStarColor={'gold'}
                                    fullStar={'ios-star'}
                                    halfStar={'ios-star-half'}
                                    iconSet={'Ionicons'}
                                    fullStarColor={'gold'}
                                    maxStars={5}
                                    rating={3.8}
                                    activeOpacity={0.2}
                                    starSize={'12%'}
                                />
                            </View>
                            <View className='items-center justify-center'>
                                <Text className='text-white text-sm font-medium'>AVG Price</Text>
                                <Text className='text-gray-200 text-md font-semibold'>42$</Text>
                            </View>
                        </View>
                        <View className='flex-1 h-full items-center justify-evenly'>
                            <View className='items-center justify-center'>
                                <Text className='text-white text-sm font-medium'>Selling Area</Text>
                                <Text className='text-gray-200 text-md font-semibold'>Tel Aviv</Text>
                            </View>
                            <View className='items-center justify-center'>
                                <Text className='text-white text-sm font-medium'>Followers</Text>
                                <Text className='text-gray-200 text-md font-semibold'>231</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <FlatList
                className='flex-[5] w-full pt-2 bg-slate-300'
                contentContainerStyle={{ height: 'auto', justifyContent: 'start', alignItems: 'center' }}
                renderItem={renderItem}
                data={posts}
                numColumns='2'
            >
            </FlatList>
            <View className='flex-1 bg-black'></View>
        </View>
    )
}

export default Profile