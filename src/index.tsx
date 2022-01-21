import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals'
import { Register } from 'components/Register'
import {Login} from 'components/Login'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
