import React from 'react'

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar'

import { FaTachometerAlt, FaGem } from 'react-icons/fa'
import { DiReact } from 'react-icons/di'

import sidebarBg from '../../assets/images/bg1.jpg'

import 'react-pro-sidebar/dist/css/styles.css'

const Sidebar = ({ collapsed, toggled, handleToggleSidebar }) => {
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'hidden',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <DiReact size={'3em'} color={'#00bfff'} />
                        <span>My sidebar</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                            // suffix={<span className="badge red">New</span>}
                        >
                            Dashboard
                        </MenuItem>
                    </Menu>

                    <Menu iconShape="circle">
                        <SubMenu
                            // suffix={<span className="badge yellow">3</span>}
                            icon={<FaGem />}
                            title="Features"
                        >
                            <MenuItem>Users</MenuItem>
                            <MenuItem>Quizzes</MenuItem>
                            <MenuItem>Questions</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <div
                            href="#"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'hidden', overflow: 'hidden' }}>
                                &copy; 2023
                            </span>
                        </div>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default Sidebar