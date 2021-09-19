import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListEntry = (prop) => {

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <View style={{flex: 1}}>
                    <Text style={styles.name}>{prop.name}</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.date}>Mar 2021</Text>
                </View>
            </View>
            <View style={styles.noteView}>
                <Text style={styles.note}>alsdfkjghasgljsdgljshdkgasdg dsgh jhdskgja dfasda fsadf dfas dfasd fsdaf dasf adsf sadf dsaf </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEDED',
        overflow: 'hidden',
        borderRadius: 10
    },

    titleView: {
        flexDirection: 'row'
    },

    noteView: {
        paddingHorizontal: 15,
        paddingBottom: 20,
        alignSelf: 'flex-start'
    },

    name: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 20
    },

    date: {
        fontSize: 16,
        color: '#FE4B03',
        textAlign: 'right',
        paddingHorizontal: 15,
        paddingVertical: 20
    },

    note: {

    },
})

export default ListEntry;
