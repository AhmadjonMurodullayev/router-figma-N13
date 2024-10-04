import React from "react";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./components/book-details/book-details";
import Header from "./layout/header/header";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/path/:id" element={<BookDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
