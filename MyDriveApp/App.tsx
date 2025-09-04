import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  
  const age = 20;
  const licenceYears = 5;
  let feedback = '';
  
  if (age >= 18) {
    if (licenceYears >= 3) {
      feedback = 'You are a qualified, safe driver.';
    } else 
      feedback = 'You are eligible to drive. Yippie!!!';
    } else {
      feedback = 'You too young for that small thing.';
    }
  
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={[styles.response, {fontSize:48, color:'green', marginBottom:15, textAlign:'center'}]}>Driving Licence Checker</Text>
      <Image
       source={{uri:'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg',}} style={styles.image} />
      <Text style={[styles.response, {color:'green', textAlign:'center'}]}>{feedback}{/*This is my message to be displayed to the user */}</Text> 
      <Text style={styles.response}>Age: {age}</Text>
      <Text style={styles.response}>Years: {licenceYears}</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96cbd1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  response: {
    fontSize: 28,
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 5,
  },

  image:{
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    top:0,
  },

});
