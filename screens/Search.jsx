import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { ButtonGroup } from '@rneui/base';


const Search = () => {

    const [selectedButton, setSelectedButton] = useState(1)
    const [searchType, setSearchType] = useState('products')
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ])


    return (
        <View className='flex-1 bg-teal-900'>
            <SafeAreaView className='' />
            <View className='flex-[1] flex-row justify-evenly bg-teal-900'>
                <TouchableOpacity className='w-1/4 justify-center items-start'>
                    <Ionicons name="filter" size={32} color="white" />
                </TouchableOpacity>
                <View className='w-1/3 h-3/4 z-10'>
                    <ButtonGroup
                    containerStyle={{width: 160, borderRadius: 12, backgroundColor: 'rgb(17, 94, 89)'}}
                    textStyle={{color: 'white'}}
                    selectedButtonStyle={{backgroundColor: 'rgb(7, 41, 38)'}}
                    Component={TouchableOpacity}
                    buttons={['Product', 'Profile']}
                    selectedIndex={selectedButton}
                    onPress={(index) => setSelectedButton(index)}
                    />
                </View>
            </View>
            <View className='flex-[2]'>
                <View className='flex-1 flex-row items-center justify-evenly'>
                    <TextInput
                        className='w-2/3 h-10 items-center justify-center px-2 text-lg bg-slate-100 rounded-md'
                        placeholder={`search ${searchType}`}
                    />
                    <TouchableOpacity className='w-20 h-12 justify-center items-center rounded-md'>
                        <MaterialCommunityIcons name="shopping-search" size={36} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View className='flex-[12] bg-slate-300'>

            </View>
        </View>
    )
}

export default Search