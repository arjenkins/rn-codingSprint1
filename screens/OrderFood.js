import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ViewOrderScreen from '../screens/ViewOrder';



const OrderFoodScreen = props => {
  return (
    <View style={styles.screen}>
      
      <Text style={styles.text}>Welcome to The Crab Shack!</Text>
      
      <Text style={styles.text1}>Enjoy fried crab legs and smoked turkey drumsticks!</Text>

       <Button
  onPress={ViewOrderScreen}
  title="Place An Order"
  color="#841584"
/>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60%',
        marginVertical: 86,
        marginHorizontal: 26,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#CA4316',
    },
    text1: {
        fontSize: 18,
        color: '#CA4316',
        textAlign: 'center',
      },
});

export default OrderFoodScreen;