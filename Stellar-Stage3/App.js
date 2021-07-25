import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DailyPic from "./screens/DaliyPic";
import SpaceCrafts from "./screens/SpaceCrafts";
import StarMap from "./screens/StarMap";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName= 'Home'
      screenOptions= {{headerShown: false}}>
      <Stack.Screen
       name = 'Home'
       component= {Home}/>
      <Stack.Screen
       name = 'DailyPic'
       component= {DailyPic}/>
       <Stack.Screen
       name = 'SpaceCrafts'
       component= {SpaceCrafts}/>
       <Stack.Screen
       name = 'StarMap'
       component= {StarMap}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;