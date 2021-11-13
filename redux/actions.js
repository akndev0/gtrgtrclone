import * as actionTypes from './types'
import axios from "axios";



export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/product/${id}`);
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: data.productData._id,
      img: data.productData.img,
      price: data.productData.price,
      title:data.productData.title,
      quantity:data.productData.quantity,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const addMinus = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/product/${id}`);
  dispatch({
    type: actionTypes.ADD_MINUS,
    payload: {
      id: data.productData._id,
      img: data.productData.img,
      price: data.productData.price,
      title:data.productData.title,
      quantity:data.productData.quantity,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};


export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const notifyAuth = (msg) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.NOTIFY,
    payload: msg,
  });
  localStorage.setItem("authnotify", JSON.stringify(getState().authData.notify));
};

export const addAuth = (token,user) => (dispatch, getState) => {
    dispatch({
     type: actionTypes.AUTH,
     payload: { token:token,
                user:user},
   });
 
   localStorage.setItem("auth", JSON.stringify(getState().authData.auth));
 };