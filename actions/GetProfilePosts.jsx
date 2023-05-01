import { Image, Text, TouchableOpacity, View } from "react-native"



const renderItem = ({ item, index }) => {

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

    if (posts.length % 2 !== 0 && index === posts.length - 1) {
        return (
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 4}} className='flex-1 w-full flex-row justify-start items-center px-1'>
                <TouchableOpacity key={index} style={{ width: 184, height: 256, margin: 3, borderRadius: 12, backgroundColor: '#fff' }} className='w-[184] h-64 m-1 bg-slate-300 rounded-lg'>
                    <View style={{ height: '80%' }}>
                        <Image source={{ uri: item.media }} style={{ height: '100%', borderTopRightRadius: 12, borderTopLeftRadius: 12 }}/>
                    </View>
                    <View className='flex-[1] flex-col items-start justify-evenly px-2'>
                        <View className='w-full flex-row justify-start items-center'>
                            {/* <Ionicons name="ios-shirt" size={12} color="black" /> */}
                            <Text style={{ color: 'Black', fontSize: 10, fontWeight: 500, marginLeft: 4 }}>{item.name}</Text>
                        </View>
                        <View className='w-full flex-row justify-start items-center'>
                            {/* <FontAwesome5 name="coins" size={12} color="black" /> */}
                            <Text style={{ color: 'Black', fontSize: 10, fontWeight: 500, marginLeft: 4 }}>{item.price} ₪</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    else {
        return (
            <TouchableOpacity key={index} style={{ width: 184, height: 256, margin: 3, borderRadius: 12, backgroundColor: '#fff' }}>
                <View style={{ height: '80%' }} className='flex-[4] w-full'>
                    <Image source={{ uri: item.media }} style={{ height: '100%', borderTopRightRadius: 12, borderTopLeftRadius: 12 }} />
                </View>
                <View className='flex-[1] flex-col items-start justify-evenly px-2'>
                    <View className='w-full flex-row justify-start items-center'>
                        {/* <Ionicons name="ios-shirt" size={12} color="black" /> */}
                        <Text style={{ color: 'Black', fontSize: 10, fontWeight: 500, marginLeft: 4 }}>{item.name}</Text>
                    </View>
                    <View className='w-full flex-row justify-start items-center'>
                        {/* <FontAwesome5 name="coins" size={12} color="black" /> */}
                        <Text style={{ color: 'Black', fontSize: 10, fontWeight: 500, marginLeft: 4 }}>{item.price} ₪</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default renderItem