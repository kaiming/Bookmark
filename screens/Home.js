import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Home({ navigation }) {
  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        placeholder="Bookmark Code"
        keyboardType="default"
        autoCapitalize="none"
        autoCompleteType="off"
      />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttontext}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    borderRadius: 6,
    padding: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 15
  },
  buttonWrapper: {
    width: 300,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttontext: {
    fontSize: 15,
    color: 'white'
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
  button: {
    marginTop: 30,
  },
});
