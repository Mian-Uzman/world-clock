import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CountryList = ({ item }) => {
    return (
        <TouchableOpacity>
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
