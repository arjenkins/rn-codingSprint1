import React, { createContext, useReducer } from 'react';
import { FOOD } from "../data/dummy-data";

//create state
const initialState = {
    food: FOOD,
    orders: [],
};
//initiate context
const FoodContext = createContext();

//create a reducer
const foodReducer = (state, action) => {
    switch (action.type) {
        case 'change_name':
            const updateFood = state.food;
            updateFood.forEach(food => {
               if (food.id === action.food.id) {
                food.title = "change name works";
                }
                return { ...state, food: updateFood };
            });
            return state;
          default:
              return state;  
    }
};

//create a provider
export const FoodProvider = ({children}) => {
    //define if going to use state or reducer, we are using reducer
    const [state, dispatch] = useReducer(foodReducer, initialState);

    const changeName = (food) => {
        dispatch({ type: 'change_name', food });
    };

    return (
        <FoodContext.Provider value={{ state, changeName }}>{children}</FoodContext.Provider>
    );

};

//exporting the context
export default FoodContext;

//import provider into App.js file