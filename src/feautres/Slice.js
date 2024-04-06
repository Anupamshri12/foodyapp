import { createSlice } from "@reduxjs/toolkit";

import foodData2 from "../foodData2";
import foodCategory from "../foodCategory";
const initialState = { 
   cart:[],
   items1:foodData2,
   items2:foodCategory
};
const counterSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            const index1 = state.cart.findIndex((item)=>{
                    return item.id === action.payload.id &&  item.sizet === action.payload.sizet
            })
            if(index1 == -1){
                state.cart.push({...action.payload})
            }
            else{
                state.cart[index1] = {...action.payload}
            }
         
            
        },
        removecart:(state ,action) =>{
           const k = state.cart.filter((cart)=>{
            if(cart.id !== action.payload.id){
                return true;
            }
            else{
                if(cart.sizet !== action.payload.sizet){
                   return true;
                }
            }
           })
           state.cart = k;
        },
        dropy:(state ,action)=>{
        state.cart = [];

        }
    }
});

export const {addtocart ,removecart ,dropy} = counterSlice.actions;
export default counterSlice.reducer
