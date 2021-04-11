import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native';

const AddButton = () => {
    return (

        <TouchableOpacity style={styles.btn}>
            <View
                style={{
                    backgroundColor: '#f55353',
                    width: 75,
                    height: 75,
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
        marginTop: 25,
        color: 'white',
        textAlign: 'center'
    }
})
