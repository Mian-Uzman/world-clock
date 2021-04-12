import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native';

const AddButton = ({ navigatePage }) => {
    return (

        <TouchableOpacity style={styles.btn} onPress={navigatePage}>
            <View
                style={{
                    backgroundColor: '#ff2e2e',
                    width: 70,
                    height: 70,
                    borderRadius: 45,
                }}>
                <Text style={styles.text}>Add</Text>
            </View>

        </TouchableOpacity>

    )
}

export default AddButton

const styles = StyleSheet.create({
    btn: {
        position: 'absolute',
        bottom: 10,
        right: 10,

    },
    text: {
        marginTop: 24,
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    }
})
