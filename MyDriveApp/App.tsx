import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const age = 16;
  let feedback = '';
  
  if (age >= 18) {
    feedback = 'You are eligible to drive. Yippie!!!';
  }
  return (
    <View style={styles.container}>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
