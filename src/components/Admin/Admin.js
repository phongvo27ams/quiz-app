import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'

import { FaBars } from 'react-icons/fa'

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
        </div>
    )
}

export default Admin