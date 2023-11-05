import React,{useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Protected from './features/auth/components/Protected';
import { BrowserRouter ,Route, Routes  } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailsPage';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import PageNotFound from './pages/404';
import UserProfilePage from './pages/UserProfilePage.js';
import OrderSuccessPage from './pages/OrderSuccessPage.js';
import UserOrdersPage from './pages/UserOrdersPage.js';
import { fetchLoggedInUserAsync } from './features/User/userSlice.js';

function App() {
  const dispatch =useDispatch();
  const user =useSelector(selectLoggedInUser);

  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    } 
  },[dispatch,user])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Protected> <Home/></Protected>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/cart" element={<Protected><CartPage/></Protected>} />
        <Route path="/checkout" element={<Protected><Checkout/></Protected>} />
        <Route path="/product-detail/:id" element={<Protected><ProductDetailPage/></Protected>} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/order-success/:id" element={<OrderSuccessPage/>} />
        <Route path="/orders" element={<UserOrdersPage/>} />
        <Route path="/profile" element={<UserProfilePage/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
