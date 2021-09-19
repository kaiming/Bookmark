import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';

export default function Authentication(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to Bookmark!</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
        keyboardType='email-address'
        autoCapitalize='none'
        autoCompleteType='off'
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={{marginTop: 70}}></View>

      <View>
        <TouchableOpacity onPress={() => props.signin(email, password)}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Create Account</Text>
          </View>
        </TouchableOpacity>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  title: {
    fontSize: 21,
    marginBottom: 30,
  },
  input: {
    width: 300,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'grey',
    marginVertical: 10,
    padding: 15,
    backgroundColor: 'white'
  },
  buttons: {
    width: 300,
    height: 50,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 6
  },
  buttontext: {
    fontSize: 15
  }
});
