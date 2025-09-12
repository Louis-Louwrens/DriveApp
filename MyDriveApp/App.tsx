import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  //defining variables below
  const age = 20;
  const licenceYears = 2; 
  let feedback = '';
  //adding if statement below
  if (age >= 18) {
    if (licenceYears >= 3) {
      feedback = 'You are a qualified, safe driver.';
    } else 
      feedback = 'You are eligible to drive. Yippie!!!';
    } else {
      feedback = 'You too young for that small thing.';
    }

  //adding switch statement below
    let drivingrank = '';
    switch (licenceYears) {
      case 0:
        drivingrank = 'Newbie driver';
        break;
      case 1:
        drivingrank = 'Rookie driver with 1 year experience';
        break;
      case 2:
        drivingrank = 'Average driver with 2 years experience';
        break;
      case 3:
      case 4:
        drivingrank = 'expereienced driver';
        break;
        default:
          drivingrank = 'Veteran driver with 5+ years experience'; 
    }
  
  return (
    <View style={styles.container}>

    <SafeAreaView style={styles.content}>
     
    
      
      <Text style={[styles.response, {fontSize:48, color:'green', marginBottom:15, textAlign:'center'}]}>Driving Licence Checker</Text>
      <Image
       source={{uri:'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg',}} style={styles.image} />
       <TextInput style={styles.inputBox} placeholder='Enter your age here'
        keyboardType='numeric'/>
        <View style={{marginTop:15, width: '60%', backgroundColor: 'Green',}}>
        <Button title = 'Check'/>
        </View>
      <Text style={[styles.response, {color:'green', textAlign:'center'}]}>{feedback}{/*This is my message to be displayed to the user */}</Text> 
      <Text style={styles.response}>Age: {age}</Text>
      <Text style={styles.response}>Years: {licenceYears}</Text>
      <Text style={[styles.response, {color:'green', textAlign:'center'}]}>{drivingrank}</Text> 
    
      

    
    </SafeAreaView>
    
    </View>
    
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
    width: '80%',
    height: '60%',
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
  inputBox: {
    width: "80%",
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 8,
  },

});