import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AllCountries from './components/AllCountries';

const Stack = createStackNavigator();
const globalScreenOption = {
  headerStyle: { backgroundColor: '#3091ff' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
  headerTitleAlign: 'center'

}



export default function App() {
  const [countryName, setCountryName] = useState([
    {
      id: '1',
      name: 'Tokyo',
      time: '05:54 PM',
      status: 'Today, 7 hours ahead'
    },
    {
      id: '2',
      name: 'New York',
      time: '04:54 AM',
      status: 'Today, 6 hours behind'
    },
    {
      id: '3',
      name: 'London',
      time: '09:54 AM',
      status: 'Today, 1 hours behind'
    },

    {
      id: '4',
      name: 'Sydney',
      time: '06:54 PM',
      status: 'Today, 8 hours ahead'
    },
    {
      id: '5',
      name: 'Moscow',
      time: '11:54 AM',
      status: 'Today, 1 hours ahead'
    },
    {
      id: '6',
      name: 'Berlin',
      time: '10:54 AM',
      status: 'Today, same time'
    },
    {
      id: '7',
      name: 'Tokyo',
      time: '05:54 PM',
      status: 'Today, 7 hours ahead'
    },
    {
      id: '8',
      name: 'New York',
      time: '04:54 AM',
      status: 'Today, 6 hours behind'
    },
    {
      id: '9',
      name: 'London',
      time: '09:54 AM',
      status: 'Today, 1 hours behind'
    },

    {
      id: '10',
      name: 'Sydney',
      time: '06:54 PM',
      status: 'Today, 8 hours ahead'
    },
    {
      id: '11',
      name: 'Moscow',
      time: '11:54 AM',
      status: 'Today, 1 hours ahead'
    },
    {
      id: '12',
      name: 'Berlin',
      time: '10:54 AM',
      status: 'Today, same time'
    }
  ]);

  const [showCountry, setShowCountry] = useState([
    {
      id: '1',
      name: 'Tokyo',
      time: '05:54 PM',
      status: 'Today, 7 hours ahead'
    },
  ]);

  function addCountry(id) {
    const index = id - 1;
    const country = countryName[index];
    setShowCountry([...showCountry, country])
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOption}>
        <Stack.Screen name='World Clock' >
          {(props) => <HomeScreen {...props} countryName={showCountry} />}
        </Stack.Screen>
        <Stack.Screen name='All Countries' >
          {(props) => <AllCountries {...props} countryName={countryName} addCountry={addCountry} />}
        </Stack.Screen>

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
