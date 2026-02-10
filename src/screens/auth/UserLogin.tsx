import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in user:', { email, password });
    navigation.navigate('Home' as never); // Navigate to Home on success
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          padding: 24,
        }}
      >
        <View className="mb-8 items-center">
          <Text className="text-2xl font-bold text-gray-800 mb-2">
            Welcome Back
          </Text>
          <Text className="text-base text-gray-600">Sign in to continue</Text>
        </View>

        <View className="w-full">
          <View className="mb-5">
            <Text className="text-sm font-semibold text-gray-800 mb-2">
              Email Address
            </Text>
            <TextInput
              className="bg-gray-100 rounded-xl p-4 text-base text-gray-800 border border-gray-200"
              placeholder="john@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View className="mb-5">
            <Text className="text-sm font-semibold text-gray-800 mb-2">
              Password
            </Text>
            <TextInput
              className="bg-gray-100 rounded-xl p-4 text-base text-gray-800 border border-gray-200"
              placeholder="********"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity
            className="bg-blue-600 rounded-xl p-4 items-center mt-3"
            onPress={handleLogin}
          >
            <Text className="text-white text-base font-bold">Log In</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-6">
            <Text className="text-sm text-gray-600">
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('UserRegister' as never)}
            >
              <Text className="text-sm text-blue-600 font-bold">Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View className="items-center mt-8">
            <TouchableOpacity
              onPress={() => navigation.navigate('SalonOwnerLogin' as never)}
            >
              <Text className="text-sm text-gray-600 underline">
                Are you a Salon Owner? Login here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserLogin;
