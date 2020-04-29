import React, { Component } from 'react';
import { View, Text, StyleSheet, Button , FlatList, TouchableOpacity } from 'react-native';
import { FOOD } from '../data/dummy-data';



const OrderFoodScreen = props => {
      return (
        <FlatList data={FOOD} renderItem={itemData => {
          return (
            <View>
      <TouchableOpacity
      style={styles.card}
      onPress={() => {
        props.navigation.navigate('Food Detail', {
          title: itemData.item.title,
          deats: itemData.item.description,
          price: itemData.item.price,
        });
        }}>
          <Text>{itemData.item.title}</Text>
          <Text>{itemData.item.price}</Text>
        </TouchableOpacity>
    </View>
      );
    }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fada5e',
    margin: 10,
    padding: 20,
  },
    text1: {
        fontSize: 18,
        color: '#CA4316',
        textAlign: 'center',
      },
});

export default OrderFoodScreen;