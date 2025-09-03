import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const age = 22;
  let feedback = '';
  
  if (age >= 18) {
    feedback = 'You are eligible to drive. Yippie!!!';
  } else {
    feedback = 'You too young for that small thing.';
  }
  return (
    <View style={styles.container}>
      <Text style={styles.response}>{feedback}</Text>
      
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

  response: {
    fontSize: 28,
    color: 'blue',
  }
});
