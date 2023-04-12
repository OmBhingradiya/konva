import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Konva from "./Konva";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Konva />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
