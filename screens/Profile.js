import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';

import { NavigationContainer } from '@react-navigation/native';


export default function Profile({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Profile</Text>
      <View style={styles.button}>
        <Button title="Move to home page" onPress={() => navigation.navigate('Home')} />
        <Button title="Log Out" onPress={() => auth().signOut()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
