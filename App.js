import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import SetupScreen from "./screens/SetupScreen"
import MainPalScreen from "./screens/MainPalScreen"

const Stack = createStackNavigator();

// cute lil trim function
if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
          headerStyle: {
            backgroundColor: "#44aa44"
          },
          headerTintColor: "#fff",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName = {"setup"}
      >
        <Stack.Screen name="setup" component = {SetupScreen} options = {{title: "EarthPal Setup"}}></Stack.Screen>
        <Stack.Screen name="mainpal" component = {MainPalScreen} options = {{title: "uh oh stinky poo"}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
