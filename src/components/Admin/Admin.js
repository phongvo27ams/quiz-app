import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'

import { FaBars } from 'react-icons/fa'

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import './Admin.scss'

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false)

    const handleClick = () => setCollapsed(prevState => !prevState)

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <Sidebar collapsed={collapsed} />
            </div>

            <div className="admin-content">
                <div className="admin-header">
                    <FaBars onClick={handleClick} />
                </div>

                <div className="admin-main">
                    <Outlet />
                </div>
            </div>

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
        </div>
    )
}

export default Admin