import { combineReducers } from 'redux'
import * as actionTypes from './types'
import Cookies from 'js-cookie';

const CART_INITIAL_STATE = {
  cartItems: [], 
  
 /// [] (typeof window !== 'undefined') ?  localStorage.getItem("cart") :,
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {

      case actionTypes.ADD_TO_CART:
   
      const item = action.payload;
      
      const inCart = state.cartItems.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cartItems: inCart
          ? state.cartItems.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cartItems, { ...item, qty: 1 }],
      };
    case actionTypes.ADD_MINUS:
         
         const inCart2 = state.cartItems.find((item) =>
         item.id === action.payload.id ? true : false
       );
       

      
       
       
       
       return {
        ...state,
        cartItems: inCart2 
          ? state.cartItems.map((item) =>
              item.id === action.payload.id
                ?( item.qty > 1 ? { ...item, qty: item.qty - 1 } :  "" ) 
                : item
            )
          : null,
      };



    case actionTypes.REMOVE_FROM_CART:
      
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};



const initialAuthState = {
  notify:[],
  auth: (typeof window !== 'undefined') ?  localStorage.getItem('auth') : '',
  
};



const authReducer = (state = initialAuthState, action ) => {
  switch (action.type) {
    case actionTypes.NOTIFY:
      return {
        ...state,
        notify: action.payload,
      }
    case actionTypes.AUTH:
    
   
    Cookies.set('auth', JSON.stringify(state.auth));
     return {
        ...state,
        
        auth: action.payload,
      }
    default:
      return state
  }
}



const reducers = {
  
  
  cart:cartReducer,
  authData:authReducer,
}

export default combineReducers(reducers)