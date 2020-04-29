import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { PROFILE } from '../data/dummy-data';


const UserScreen = props => {

//TODO: Extract data from profile array to get first name of user.
  return (
    <View style={styles.container}>
        <Text style={styles.text1}>User Profile Page</Text>
        <Text>User name should be here: {PROFILE.length}</Text>
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
    text1: {
        fontSize: 18,
        color: '#CA4316',
        textAlign: 'center',
      },
});

export default UserScreen;
