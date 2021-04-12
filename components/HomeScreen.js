import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import AddButton from './AddButton';
import CountryList from './CountryList';

const HomeScreen = ({ navigation, countryName }) => {

    function navigatePage(id) {
        navigation.navigate('All Countries');
    };

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={countryName} renderItem={({ item }) => (
                    <CountryList item={item} navigatePage={navigatePage} />
                )} />

            <AddButton navigatePage={navigatePage} />
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

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#DCDCDC',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 10,
    },
    pic: {
        borderRadius: 30,
        width: 60,
        height: 60,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
        height: 70,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 20,
        width: 170,
    },
    timeTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 14,
    },
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    msgTxt: {
        fontWeight: '400',
        color: '#008B8B',
        fontSize: 12,
        marginLeft: 15,
    },
})
