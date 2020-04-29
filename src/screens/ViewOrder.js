import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ViewOrderScreen = props => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>The Crab Shack</Text>
      <Text style={styles.text1}>Your order has been placed!</Text>
      <Text> Current Order: {props.route.params.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#CA4316',
      },
      text1: {
        fontSize: 18,
        color: '#CA4316',
      },
});

export default ViewOrderScreen;