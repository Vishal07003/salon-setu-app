import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserLogin from '../screens/UserLogin';
import UserRegister from '../screens/UserRegister';
import SalonOwnerLogin from '../screens/SalonOwnerLogin';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserLogin"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="UserLogin" component={UserLogin} />
                <Stack.Screen name="UserRegister" component={UserRegister} />
                <Stack.Screen name="SalonOwnerLogin" component={SalonOwnerLogin} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
