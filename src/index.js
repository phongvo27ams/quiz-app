import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Home from '../src/components/Home/Home'
import User from '../src/components/User/User'
import Admin from '../src/components/Admin/Admin'
import ManageUser from './components/Admin/Content/ManageUser'
import DashBoard from './components/Admin/Content/DashBoard'

import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path='user' element={<User />} />
            </Route>

            <Route path='/admin' element={<Admin />}>
                <Route index element={<DashBoard />} />
                <Route path='manage-user' element={<ManageUser />} />
            </Route>
        </Routes>
    </BrowserRouter>
)