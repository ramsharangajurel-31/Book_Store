 import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import "./App.css";
import Navbar from "./components/layout/Navbar";
import AboutPage from "./pages/Aboutpage";
import Home from "./pages/Home";
// import Productlist from "./components/product/Productlist";
import AddProduct from "./components/product/AddProduct";
import Login from "./components/auth/Login";
import Signup  from "./components/auth/Signup";
import Footer from "./components/layout/footer";

import Contact from "./components/contact";
import CompanyForm from "./components/CompanyForm";
import CartItems from "./components/CartItems";
import ProductState from "./Context/ProductState";
import CategoryPage from "./components/product/CategoryPage";
import BooksByCategory from "./components/product/BooksByCategory";
import BookDetails from "./components/product/BookDetails";
import TopHeader from "./components/layout/TopHeader";
import AdminPanel from "./components/AdminPanel";
import ProtectedRoute from "./components/auth/ProtectedRoute";



function App() {
  


  return (
    <>
      <Router>
        <ProductState>
          <TopHeader />
          <Navbar  />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path ='/about' element={<AboutPage/>} />
   
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            } /> 

            
           
            <Route path="contact" element={<Contact />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path ="/companyform" element={<CompanyForm />} />
            <Route path="/login" element={<Login />} />
         
           
            <Route path="/cartitems" element ={<CartItems />} />
              <Route path="/categories" element={<CategoryPage />} />
             <Route path="/books/:category" element={<BooksByCategory />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
          <Footer />
        
        </ProductState> 
      </Router>
    </> 
  ); 
}

export default App;
