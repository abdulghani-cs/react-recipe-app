import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RecipeDetails from "./pages/RecipeDetails";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "../redux/store";
import Footer from "./components/Footer"; // Import Footer component
import "./style.css";


  //some html code



const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className="background">
            <Navbar />
            <Toaster />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
            <Footer /> {/* Include the Footer component */}
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
