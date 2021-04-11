import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import AddButton from './AddButton';
import CountryList from './CountryList';


const HomeScreen = () => {
    const [countryName, setCountryName] = useState([
        {
            id: 1,
            name: 'Tokyo',
            time: '05:54 PM',
            status: 'Today, 7 hours ahead'
        },
        {
            id: 2,
            name: 'New York',
            time: '04:54 AM',
            status: 'Today, 6 hours behind'
        },
        {
            id: 3,
            name: 'London',
            time: '09:54 AM',
            status: 'Today, 1 hours behind'
        },

        {
            id: 4,
            name: 'Sydney',
            time: '06:54 PM',
            status: 'Today, 8 hours ahead'
        },
        {
            id: 5,
            name: 'Moscow',
            time: '11:54 AM',
            status: 'Today, 1 hours ahead'
        },
        {
            id: 6,
            name: 'Berlin',
            time: '10:54 AM',
            status: 'Today, same time'
        },
        {
            id: 7,
            name: 'Tokyo',
            time: '05:54 PM',
            status: 'Today, 7 hours ahead'
        },
        {
            id: 8,
            name: 'New York',
            time: '04:54 AM',
            status: 'Today, 6 hours behind'
        },
        {
            id: 9,
            name: 'London',
            time: '09:54 AM',
            status: 'Today, 1 hours behind'
        },

        {
            id: 10,
            name: 'Sydney',
            time: '06:54 PM',
            status: 'Today, 8 hours ahead'
        },
        {
            id: 11,
            name: 'Moscow',
            time: '11:54 AM',
            status: 'Today, 1 hours ahead'
        },
        {
            id: 12,
            name: 'Berlin',
            time: '10:54 AM',
            status: 'Today, same time'
        }

    ])


    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={countryName} renderItem={({ item }) => (
                    <CountryList item={item} />
                )} />
            <AddButton />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',

    },

})
