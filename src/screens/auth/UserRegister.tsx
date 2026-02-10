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

const UserRegister = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement registration logic here
    console.log('Registering user:', { name, email, phone, password });
    // Navigate to Login or Home after successful registration
    navigation.navigate('UserLogin' as never);
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
            Create Account
          </Text>
          <Text className="text-base text-gray-600">
            Sign up to get started
          </Text>
        </View>

        <View className="w-full">
          <View className="mb-5">
            <Text className="text-sm font-semibold text-gray-800 mb-2">
              Full Name
            </Text>
            <TextInput
              className="bg-gray-100 rounded-xl p-4 text-base text-gray-800 border border-gray-200"
              placeholder="John Doe"
              value={name}
              onChangeText={setName}
            />
          </View>

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
              Phone Number
            </Text>
            <TextInput
              className="bg-gray-100 rounded-xl p-4 text-base text-gray-800 border border-gray-200"
              placeholder="+1 234 567 8900"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
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
            onPress={handleRegister}
          >
            <Text className="text-white text-base font-bold">Register</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-6">
            <Text className="text-sm text-gray-600">
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('UserLogin' as never)}
            >
              <Text className="text-sm text-blue-600 font-bold">Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserRegister;
