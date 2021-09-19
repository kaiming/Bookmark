import React from 'react';
import type {Node} from 'react';
import {
    Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { grey100 } from 'react-native-paper/lib/typescript/styles/colors';

const ButtonRow = () => {

    return (
        <View style={[styles.mainView]}>
             <Text style={styles.textAlter1}>Villa Casaaaaaaaaaaaaaa</Text>
             <Text style={styles.textAlter2}>53 signed guests here</Text>
             <View style={styles.buttonView}>
                 <TouchableOpacity>
                     <View style={styles.button}>
                         <Text style={styles.textView}>Like</Text>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity>
                     <View style={styles.button}>
                         <Text style={styles.textView}>Add</Text>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity>
                     <View style={styles.button}>
                         <Text style={styles.textView}>Filter</Text>
                     </View>
                 </TouchableOpacity>

             </View>
             <ScrollView style={styles.scrollView}></ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    buttonView: {
        padding: 20,
        paddingTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    scrollView: {

    },

    textAlter1: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#B2B2B2'
    },

    textAlter2: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    textView: {
        textAlign: 'center',
        color: '#525252'
    },

    mainView: {
        paddingTop: 100,
        paddingLeft: 45,
        paddingRight: 45,
        flexWrap: 'wrap'
       
    },

    button: {
        borderRadius: 10,
        padding: 8,
        width: 60,
        marginHorizontal: 20,
        backgroundColor: '#BFBFBF',
        borderColor: '#fff'
    },
});

export default ButtonRow;
