import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../../components/constants/constant/screens';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomePage" component={screens.HomePage} options={{ title: 'Home' }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
