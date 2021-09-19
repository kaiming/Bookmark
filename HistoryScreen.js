import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native';
import ListEntry from './components/ListEntry' 

const sortEntries = () => {

}

const filterEntries = () => {

}

const HistoryScreen = () => {
    // temp mock data
    const [name, setName] = useState([
        { name: 'shaun X', id: '1' },
        { name: 'yoshi X', id: '2' },
        { name: 'mario X', id: '3' },
        { name: 'luigi X', id: '4' },
        { name: 'peach X', id: '5' },
        { name: 'toad X', id: '6' },
        { name: 'bowser X', id: '7' }
    ]);

    return (
        <View style={styles.container}>
            {/*Guestbook counter*/}
            <View style={styles.counterWrapper}>
                <Text style={{fontSize: 16}}>7 Guestbook(s) signed</Text>
            </View>

            {/*Buttons*/}
            <View style={styles.buttonContainer}>
                <View style={{paddingRight: 15}}>
                    <TouchableOpacity onPress={() => sortEntries()}>
                        <View style={styles.sortWrapper}>
                            <Text>Sort</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => filterEntries()}>
                    <View style={styles.filterWrapper}>
                        <Text>Filter</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/*Entries*/}
            <View style={styles.listWrapper}>
                <FlatList
                    data={name}
                    renderItem={({ item }) => (
                        <View style={styles.entry}>
                            <ListEntry name={item.name}></ListEntry>
                        </View>
                    )}
                    keyExtractor={(item) => item.id} 
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    counterWrapper: {
        paddingTop: 100,
        paddingLeft: 20
    },

    buttonContainer: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingLeft: 20
    },

    sortWrapper: {
        width: 70,
        height: 30,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    filterWrapper: {
        width: 70,
        height: 30,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    listWrapper: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },

    entry: {
        flex: 1,
        paddingTop: 20,
    }

})

export default HistoryScreen;
