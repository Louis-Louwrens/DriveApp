import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  
  const age = 22;
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
    <View>
      <Image
       source={{uri:'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg',}} style={styles.image} />
      <Text style={styles.response}>{feedback}{/*This is my message to be displayed to the user */}</Text> 
      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f09cff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  response: {
    fontSize: 28,
    color: 'blue',
  },
  image:{
    width: 450,
    height: 350,
    resizeMode: 'contain',
    top:0,
    position:'absolute',
  },

});
