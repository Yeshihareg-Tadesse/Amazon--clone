import { Type } from "./Action.type";

export const initialState = {
    basket:[],
    
}

export const reducer =(state, action)=>{
    
    switch (action.type){
        
    case Type.Add_T0_Basket:{
            const existingItem = state.basket.find(item => item.id === action.item.id);
            if(!existingItem){
            return {
                ...state,
                basket:[...state.basket, {...action.item, amount:1}]
            }
        
    } else {
        const updatedBasket = state.basket.map((item)=>{
      
          item.id===action.item.id? {...item,amount:item.amount + 1}: item
      })
                return{
                    ...state,
                    basket:updatedBasket
                }
            }
            }
            default:
                return state;
    }
    }
    
        