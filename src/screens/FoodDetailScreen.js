import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';


const FoodDetailScreen = props => {
  console.log(props.route);
  return (
    <View style={styles.container}>
        <Text>{props.route.params.foodId}</Text>
        <Text style={styles.text1}>{props.route.params.title}</Text>
        <Text >{props.route.params.deats}</Text>
        <Text >{props.route.params.price}</Text>

        <Button title="Place Order" onPress={()=> props.navigation.navigate('View Orders', {
          title: props.route.params.title,
        })}/>
    </View>
  );
};

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#e0e0e0',
            alignItems: 'center',
            justifyContent: 'center',
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

export default FoodDetailScreen;