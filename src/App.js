import React from "react";

import Homepage from "./components/Homepage";
import ListPage from "./components/ListPage";
import DragPage from "./components/DragPage";

import './styles/style.scss'
import {Routes,Route} from "react-router-dom"

function App() {
    return (
      <div className="app">
          <Routes>
          <Route  path="/" element={<Homepage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/drag" element={<DragPage />} />
      
        </Routes>
           

      </div>     
    );
  }
  
export default App;