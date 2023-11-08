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
import Logout from './features/auth/components/Logout.js';
import ForgotPasswordPage from './pages/ForgotPasswordPage.js';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin.js';
import AdminHome  from './pages/AdminHome.js'
import AdminProductDetailPage from './pages/AdminProductDetailPage.js';
import AdminProductFormPage from './pages/AdminProductFormPage.js';

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
        <Route exact path="/admin" element={<ProtectedAdmin> <AdminHome/></ProtectedAdmin>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/cart" element={<Protected><CartPage/></Protected>} />
        <Route path="/checkout" element={<Protected><Checkout/></Protected>} />
        <Route path="/product-detail/:id" element={<Protected><ProductDetailPage/></Protected>} />
        <Route path="/admin/product-detail/:id" element={<ProtectedAdmin><AdminProductDetailPage/></ProtectedAdmin>} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/order-success/:id" element={<OrderSuccessPage/>} />
        <Route path="/orders" element={<UserOrdersPage/>} />
        <Route path="/profile" element={<UserProfilePage/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
        <Route path="/admin/product-form" element={<ProtectedAdmin><AdminProductFormPage/></ProtectedAdmin>} />
        <Route path="/admin/product-form/edit/:id" element={<ProtectedAdmin><AdminProductFormPage/></ProtectedAdmin>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
