import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AddButton from './components/AddButton';

const Stack = createStackNavigator();
const globalScreenOption = {
  headerStyle: { backgroundColor: '#54c1f7' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white'
}
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOption}>
        <Stack.Screen name='Home' component={HomeScreen} />
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
