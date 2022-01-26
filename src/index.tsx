import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import 'base/assets/sass/style.scss'
import 'base/assets/sass/style.react.scss'
import {I18nProvider} from 'base/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from 'base/layout/core'
import {Auth} from 'pages/Auth'
import {AuthProvider} from 'context/AuthContext'
import {Logout} from 'components/Logout'
import {Dashboard} from 'pages/Dashboard'

ReactDOM.render(
  <React.StrictMode>
    <I18nProvider>
      <Suspense fallback={<LayoutSplashScreen />}>
        <BrowserRouter>
          <AuthProvider>
            <LayoutProvider>
              <Routes>
                <Route path="registration" element={<Auth page="register"/>} />
                <Route path="login" element={<Auth page="login"/>} />
                <Route path='logout' element={<Logout />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='/' element={<Dashboard />} />
              </Routes>
            </LayoutProvider>
          </AuthProvider>
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
