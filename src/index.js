import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Home from '../src/components/Home/Home'
import User from '../src/components/User/User'
import Admin from '../src/components/Admin/Admin'

import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path='/user' element={<User />} />
                <Route path='/admin' element={<Admin />} />
            </Route>
        </Routes>
    </BrowserRouter>
)