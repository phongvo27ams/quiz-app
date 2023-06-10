import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import App from './App'
import Home from '../src/components/Home/Home'
import User from '../src/components/User/User'
import Admin from '../src/components/Admin/Admin'
import ManageUser from './components/Admin/Content/ManageUser'
import DashBoard from './components/Admin/Content/DashBoard'
import Login from './components/Auth/Login'

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='user' element={<User />} />
                </Route>

                <Route path='/admin' element={<Admin />}>
                    <Route index element={<DashBoard />} />
                    <Route path='manage-user' element={<ManageUser />} />
                </Route>

                <Route path='/login' element={<Login />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Layout