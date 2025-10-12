import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../../components/constants/constant/screens';

const Stack = createNativeStackNavigator();

const DiscoverStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="DiscoverHomePage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="DiscoverHomePage" component={screens.DiscoverHomePage} options={{ title: 'Home' }} />
      <Stack.Screen name="Recepies" component={screens.Recipes} />
      <Stack.Screen name="RecepieDetails" component={screens.RecipeDetail} />

    </Stack.Navigator>
  );
};

export default DiscoverStack;
