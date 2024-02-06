import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Explore } from "./pages/index";
import Preview from "./pages/Preview";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#121212] h-full overflow-y-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/preview/:id" element={<Preview />} />
      </Routes>
    </div>
  );
};

export default App;
