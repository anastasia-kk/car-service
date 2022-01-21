import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals'
import {I18nProvider} from 'base/i18n/i18nProvider'
import { Register } from 'components/Register'
import {Login} from 'components/Login'
import {LayoutProvider, LayoutSplashScreen} from 'base/layout/core'
import {DashboardWrapper} from 'base/pages/dashboard/DashboardWrapper';

ReactDOM.render(
  <React.StrictMode>
    <I18nProvider>
      <Suspense fallback={<LayoutSplashScreen />}>
        <BrowserRouter>
          <LayoutProvider>
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path='dashboard' element={<DashboardWrapper />} />
            </Routes>
          </LayoutProvider>
        </BrowserRouter>
      </Suspense>
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
