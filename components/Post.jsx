import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import * as Haptics from "expo-haptics";
import { Ionicons, Entypo, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";

import { addToWishList, removeFromWishList } from "../redux/wishlist";

const Post = (props) => {
    const [fav, setFav] = useState('white')
    const { post, navigation } = props
    const wishlist = useSelector(state => state.wishlist.items)
    const dispatch = useDispatch();
    const addToWishList = (currPost) => {
        const exists = wishlist.some((item) => {
            console.log(item);
            console.log(currPost);
            
            return (item === currPost);
        });
        console.log(exists);
        // if (exists) {
        //     dispatch(removeFromWishList(currPost, index))
        //     setFav('white')
        // }
        // else {
        //     dispatch(addToWishList(currPost))
        //     setFav('rgb(14, 165, 233)')
        //     Haptics.notificationAsync(Haptics.ImpactFeedbackStyle.Success)
        // }
        // const userID = await AsyncStorage.getItem("user")
        // const res = await axios.post(process.env.REACT_APP_BACKEND_URL + '/user/addToWishList', { userID: JSON.parse(userID), newItemWishList: post._id })
        // console.log("this is res for add to wish list ", res.data)
    }
    
    const styles = StyleSheet.create({
        iconShadow: {
            elevation: 5, shadowColor: 'black', shadowOpacity: 1, shadowRadius: 8, shadowOffset: { width: 0, height: 0 }
        },
        smallIconShadow: {
            elevation: 5, shadowColor: 'black', shadowOpacity: 1, shadowRadius: 5, shadowOffset: { width: 0, height: 0 }
        },
        heart: {
            position: 'absolute',
            top: '50%',
            left: '46%',
            transform: [{ translateX: -25 }, { translateY: -60 }],
            backgroundColor: 'transparent',
            color: 'white',
            fontSize: 100,
            zIndex: 1,
        }
    })
    const [showHeart, setShowHeart] = useState(false);
    const [like, setLike] = useState('white');
    const [lastPress, setLastPress] = useState(0);
    const handleDoublePress = () => {
        const currentTime = new Date().getTime();
        const delta = currentTime - lastPress;
        if (delta < 200) {
            liked()
            setLike('red')
            setShowHeart(true);
            setTimeout(() => {
                setShowHeart(false);
            }, 1000);
        }
        setLastPress(currentTime);
    }
    const liked = () => {
        like === 'white' ? setLike('red') : setLike('white')
        Haptics.notificationAsync(Haptics.ImpactFeedbackStyle.Success)
    }
    return (
        <View className='flex bg-white justify-center overflow-scroll'>
            <Pressable onPress={handleDoublePress}>
                <ImageBackground source={{ uri: post.productImage }} resizeMode='contain' className='h-[100vh]' />
                {showHeart && <MaterialIcons name="favorite" color="white" style={styles.heart} />}
            </Pressable>
            <View className='absolute w-1/6 h-1/3 bottom-5 right-2  rounded-full flex justify-around items-center'>
                <TouchableOpacity className='bg-transparent' onPress={() => {
                    // navigation.navigate('Profile', { post: post })
                    Haptics.selectionAsync()
                }}>
                    <FontAwesome name="user-circle" style={styles.iconShadow} size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity className='bg-transparent' onPress={liked}>
                    <MaterialIcons name="favorite" style={styles.iconShadow} size={40} color={like} />
                </TouchableOpacity>
                <TouchableOpacity className='bg-transparent' onPress={() => {
                    navigation.navigate('Details', { post: post })
                    Haptics.selectionAsync()
                }}>
                    <Ionicons name="eye" style={styles.iconShadow} size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity className='bg-transparent' onPress={() => addToWishList(post)}>
                    <Ionicons name="star" style={styles.iconShadow} size={40} color={fav} />
                </TouchableOpacity>
            </View>
            <View className='absolute h-[7.5vh] w-[70%] bottom-2 left-4 flex-row  rounded-full flex justify-start items-center'>
                <Entypo style={styles.smallIconShadow} name="price-tag" size={30} color="white" />
                <Text style={styles.smallIconShadow} className='text-xl font-bold text-white mr-5 ml-2'>{post.size}</Text>
                <FontAwesome5 style={styles.smallIconShadow} name="coins" size={30} color="white" />
                <Text style={styles.smallIconShadow} className='text-xl font-bold text-white ml-2'>{post.price}</Text>
            </View>
        </View>
    );
}

export default Post;
