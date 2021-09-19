 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   TouchableOpacity,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';
 
 const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const Profile: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
           <Section title="John Green">
             <Text>john.green@abc.com{"\n"}{"\n"}
             <Text style={styles.highlight}>X</Text> Bookmarks signed
             </Text>
             </Section>

            <View style={styles.buttons}>
            <Section>
             <TouchableOpacity>
                     <View style={styles.button}>
                         <Text style={styles.buttonText}>My History</Text>
                     </View>
                 </TouchableOpacity>
             </Section>
 
             <Section>
             <TouchableOpacity>
                     <View style={styles.button}>
                         <Text style={styles.buttonText}>My Liked</Text>
                     </View>
                 </TouchableOpacity>
             </Section>
             
             <Section>
             <TouchableOpacity>
                     <View style={styles.button}>
                         <Text style={styles.buttonText}>Logout</Text>
                     </View>
                 </TouchableOpacity>
             </Section>
            </View>
           
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   buttons: {
    padding: 20,
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'flex-end',
   },
   button: {
    borderRadius: 10,
    padding: 10,
    width: 200,
    marginHorizontal: 20,
    backgroundColor: '#BFBFBF',
    borderColor: '#fff'
   },
   buttonText: {
     color:'black',
       textAlign:'center',
       paddingLeft : 10,
       paddingRight : 10,
       fontSize : 20,
       fontWeight: "bold"
   }
   }
 );
 
 export default Profile;
 
 
