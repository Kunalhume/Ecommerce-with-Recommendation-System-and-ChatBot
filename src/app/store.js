import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice.js';
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/cart/cartSlice'
import orderReducer from '../features/order/orderSlice'
import userReducer  from '../features/User/userSlice.js';

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth:authReducer,
    cart:cartReducer,
    order:orderReducer,
    user:userReducer
  },
});
