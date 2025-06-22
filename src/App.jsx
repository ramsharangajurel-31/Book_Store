 import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp"; 
import Userlist from "./components/Userlist";
import UserDetail from "./components/UserDetail";
import ProductState from "./Context/ProductState";
import CartItems from "./components/CartItems";
import CompanyForm from "./components/CompanyForm";
import AddProduct from "./components/AddProduct";

function App() {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("John ");
  const [mode, setMode] = useState("dark");
  const [text, setText] = useState("Theme ");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setText("Dark Theme");
      showAlert("Light mode enabled successfully!", "Success");
    } else {
      setMode("dark");
      setText("Light Theme");
      showAlert("Dark mode enabled successfully!", "Success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  let title = " < Light & Lens >";

  return (
    <>
      <Router>
        <ProductState>
          <Navbar mode={mode} toggleMode={toggleMode} text={text} title={title} />
          <Alert alert={alert} />
          <ToastContainer />

          <Routes>
            <Route path="/" element={<Home mode={mode} />} />
            <Route path="about" element={<About mode={mode} />} />
             <Route path="/addproduct" element={<AddProduct mode={mode} />} />    
            <Route
              path="blog"
              element={
                <Blog
                  title="Welcome to Blogs!"
                  backgroundColor={mode === "dark" ? "#333" : "#fff"}
                  mode={mode}
                />
              }
            />
            <Route path="contact" element={<Contact mode={mode} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path ="/companyform" element={<CompanyForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userlist" element={<Userlist />} />
            <Route path="/users/:id/:username" element={<UserDetail />} />
            <Route path="/cartitems" element ={<CartItems />} />
          </Routes>
        
        </ProductState> 
      </Router>
    </> 
  ); 
}

export default App;
