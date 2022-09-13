import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mainpage from './App';
import reportWebVitals from './reportWebVitals';
import Todos from './todo'
import Login from './loginpage';
import Signup from './loginpage2';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    

    <BrowserRouter>
      
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
