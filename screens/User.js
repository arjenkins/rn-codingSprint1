import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const UserScreen = props => {
  return (
    <View style={styles.screen}>
        <Text style={styles.text}>The Crab Shack</Text>
      <Text style={styles.text1}>Create a profile for easier checkout.</Text>
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

export default UserScreen;