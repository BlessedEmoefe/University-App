import React, {useMemo, useEffect, useReducer, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../../screens/home/home.screen';
import CountryUniversities from '../../screens/CountryUniversities/CountryUniversities.screen';
import {SignIn} from '../../screens/Auth/SignIn/SignIn.screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen
          name="CountryUniversities"
          component={CountryUniversities}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};