import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, FlatList, View, TextInput, TouchableWithoutFeedback } from 'react-native'
import CountryList from './CountryList';


const AllCountries = ({ navigation, addCountry, countryName }) => {

    const [search, setSearch] = useState('');

    function navigateHome(id) {
        navigation.navigate('World Clock', { id: id });
        addCountry(id);
    }
    function searchCountry() {
        return countryName.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.container}>
                <TextInput
                    style={styles.searchBar}
                    onChangeText={(e) => setSearch(e)}
                    placeholder='Search' />
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={searchCountry()}
                    renderItem={({ item }) => (
                        <CountryList item={item} navigatePage={navigateHome} />
                    )}
                />
            </View>
        </TouchableWithoutFeedback>

    )
}

export default AllCountries

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',

    },
    searchBar: {
        margin: 20,
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        paddingLeft: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd'
    },
})
