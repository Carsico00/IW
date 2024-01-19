import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TabsNavigator from './TabsNavigator';
import header from "@react-navigation/stack/src/views/Header/Header"; // Adjust the import path based on your project structure

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'HomeScreen'}>
        <Stack.Screen  options={{ headerShown: false }} name="TabNavigator" component={TabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
