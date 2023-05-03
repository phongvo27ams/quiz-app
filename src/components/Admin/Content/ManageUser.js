import React, { useEffect, useState } from 'react'

import ModalCreateUser from './ModalCreateUser'

import { getAllUsers } from '../../../services/apiService'

import './ManageUser.scss'
import TableUser from './TableUser'

const ManageUser = () => {
    const [listUsers, setListUsers] = useState([])

    const fetchListUsers = async () => {
        let res = await getAllUsers()

        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    useEffect(() => {
        fetchListUsers()
    }, [])

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage Users
            </div>

            <div className="user-content">
                <div className="btn-add-new">
                    <ModalCreateUser fetchListUsers={fetchListUsers} />
                </div>

                <div className="table-user-container">
                    <TableUser listUsers={listUsers} />
                </div>
            </div>
        </div>
    )
}

export default ManageUser