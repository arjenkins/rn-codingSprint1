import React, { useContext } from 'react';
import FoodContext from '../context/Context';
import { View, Text, StyleSheet, Button , FlatList, TouchableOpacity } from 'react-native';

const OrderFoodScreen = props => {
  const { state, changeName } = useContext(FoodContext);
  //console.log('my state', state);
  const food = state.food;

      return (
        <View>
          <View style={styles.header}>
            <Text style={styles.text1}>Welcome The Crab Shack</Text>
          </View>
        <FlatList 
        data={food} 
        renderItem={itemData => {
          return (
            <View>
      <TouchableOpacity
      style={styles.card}
      onPress={() => {
        changeName(itemData.item);

      //  props.navigation.navigate('Food Detail', {
       //   title: itemData.item.title,
        //  deats: itemData.item.description,
         // price: itemData.item.price,
       // });
        }}>
          <Text>{itemData.item.title}</Text>
          <Text>{itemData.item.price}</Text>
        </TouchableOpacity>
    </View>
      );
    }}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fada5e',
    margin: 10,
    height: 90,
    },
    card: {
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fada5e',
    marginVertical: 10,
    margin: 10,
    padding: 20,
  },
    text1: {
        fontSize: 20,
        color: '#CA4316',
        textAlign: 'center',
      },
});

export default OrderFoodScreen;