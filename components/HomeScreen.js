import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import AddButton from './AddButton';
import { TouchableOpacity } from 'react-native';


const HomeScreen = ({ navigation, addCountry, countryName }) => {

    function navigatePage() {
        navigation.navigate('All Countries');
    };

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={countryName} renderItem={({ item }) => (

                    <TouchableOpacity onPress={() => addCountry}>
                        <View style={styles.row}>
                            <View>
                                <View style={styles.nameContainer}>

                                    <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                                    <Text style={styles.timeTxt}>{item.time}</Text>

                                </View>
                                <View style={styles.msgContainer}>
                                    <Text style={styles.msgTxt}>{item.status}</Text>
                                </View>

                            </View>
                        </View>

                    </TouchableOpacity>
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
