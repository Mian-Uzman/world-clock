import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native';

const CountryList = ({ item, navigatePage }) => {

    return (
        <TouchableOpacity onPress={() => navigatePage(item.id)}>
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

    )
}

export default CountryList

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#DCDCDC',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 10,
    },

    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        height: 55,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 22,
        width: 200,
    },
    timeTxt: {
        fontWeight: '600',
        color: '#777',
        fontSize: 16,
        marginTop: 10
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
        marginBottom: 10
    },
})
