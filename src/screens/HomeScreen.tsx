import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = [
    { id: '1', name: 'Hair Cut', icon: '💇' },
    { id: '2', name: 'Facial', icon: '🧖' },
    { id: '3', name: 'Beard', icon: '🧔' },
    { id: '4', name: 'Massage', icon: '💆' },
    { id: '5', name: 'Makeup', icon: '💄' },
];

const salons = [
    {
        id: '1',
        name: 'Style Studio',
        location: '2 km away',
        rating: '4.5',
    },
    {
        id: '2',
        name: 'Glow Salon',
        location: '3.5 km away',
        rating: '4.3',
    },
    {
        id: '3',
        name: 'Urban Look',
        location: '1.2 km away',
        rating: '4.7',
    },
];

const HomeScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">

            <ScrollView showsVerticalScrollIndicator={false}>

                {/* Header */}
                <View className="px-5 pt-4">
                    <Text className="text-2xl font-bold text-black">
                        Find Your Style ✨
                    </Text>

                    <TextInput
                        placeholder="Search salon or service..."
                        className="mt-4 bg-gray-100 h-12 rounded-xl px-4"
                    />
                </View>

                {/* Categories */}
                <View className="mt-6 px-5">
                    <Text className="text-lg font-semibold text-black mb-4">
                        Categories
                    </Text>

                    <FlatList
                        data={categories}
                        numColumns={3}
                        keyExtractor={(item) => item.id}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        renderItem={({ item }) => (
                            <TouchableOpacity className="bg-gray-100 w-[30%] h-24 rounded-xl mb-4 items-center justify-center">
                                <Text className="text-3xl">{item.icon}</Text>
                                <Text className="text-xs mt-2 font-medium">
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                {/* Nearby Salons */}
                <View className="mt-4 px-5">
                    <Text className="text-lg font-semibold text-black mb-4">
                        Nearby Salons
                    </Text>

                    {salons.map((salon) => (
                        <TouchableOpacity
                            key={salon.id}
                            className="bg-gray-50 p-4 rounded-2xl mb-4 shadow-sm"
                        >
                            <Text className="text-base font-bold text-black">
                                {salon.name}
                            </Text>

                            <Text className="text-gray-500 mt-1">
                                {salon.location}
                            </Text>

                            <Text className="text-yellow-500 mt-1">
                                ⭐ {salon.rating}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
