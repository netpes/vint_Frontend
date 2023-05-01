import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ListItem, Icon, Avatar } from '@rneui/themed';
import { useState } from 'react';
import ChangeEmail from './ChangeEmail';
import { Entypo } from '@expo/vector-icons';

const Settings = () => {

    const [expandedEmail, setExpandedEmail] = useState(false)
    const [expandedPasssword, setExpandedPasssword] = useState(false)
    const [expanded, setExpanded] = useState(false)

    return (
        <View className='w-full h-full flex bg-sky-900'>
            <SafeAreaView />
            <View className='flex-[1] justify-center items-center bg-sky-900'>
                <Text className='text-4xl text-white font-bold'>Settings</Text>
            </View>
            <View className='flex-[7] bg-white'>
                <ListItem.Accordion
                    content={
                        <View className='flex-1 flex-row'>
                            <View className='w-2/5 flex-row items-center justify-between'>
                                <Icon name="email" size={24} />
                                <Text className='text-lg'>Email</Text>
                            </View>
                        </View>
                    }
                    isExpanded={expandedEmail}
                    onPress={() => {
                        setExpandedEmail(!expandedEmail);
                    }}
                >
                    <ListItem>
                        <ListItem.Content className='h-64'>
                            <ChangeEmail />
                        </ListItem.Content>
                    </ListItem>
                </ListItem.Accordion>
                <ListItem.Accordion
                    content={
                        <View className='flex-1 flex-row'>
                            <View className='w-2/5 flex-row items-center justify-between'>
                                <Icon name="security" size={24} />
                                <Text className='text-lg'>Password</Text>
                            </View>
                        </View>
                    }
                    isExpanded={expandedPasssword}
                    onPress={() => {
                        setExpandedPasssword(!expandedPasssword);
                    }}
                >
                    <ListItem>
                        <ListItem.Content>

                        </ListItem.Content>
                    </ListItem>
                </ListItem.Accordion>
                <ListItem.Accordion
                    content={
                        <View className='flex-1 flex-row'>
                            <View className='w-2/5 flex-row items-center justify-between'>
                                <Icon name="place" size={24} />
                                <Text className='text-lg'>Location</Text>
                            </View>
                        </View>
                    }
                    isExpanded={expanded}
                    onPress={() => {
                        setExpanded(!expanded);
                    }}
                >
                    <ListItem>
                        <ListItem.Content>

                        </ListItem.Content>
                    </ListItem>
                </ListItem.Accordion>
                <View className='flex-[2] items-center justify-end bg-slate-500'>
                    <TouchableOpacity className='h-20 w-full flex-row items-center justify-between px-4 bg-slate-200'>
                        <Text className='text-xl font-semibold'>Log Out</Text>
                        <Entypo name="log-out" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View className='flex-[1] w-full bg-black'>

            </View>
        </View>
    )
}

export default Settings