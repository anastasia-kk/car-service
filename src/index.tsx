import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals'
import { Register } from 'components/Register'
import {Login} from 'components/Login'
import {LayoutProvider, LayoutSplashScreen} from 'base/layout/core'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LayoutSplashScreen />}>
      <BrowserRouter>
        <LayoutProvider>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </LayoutProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
