import React, { useEffect, useState } from 'react'

import ModalCreateUser from './ModalCreateUser'
import ModalUpdateUser from './ModalUpdateUser'
import TableUser from './TableUser'

import Button from 'react-bootstrap/Button'

import { AiFillPlusCircle } from 'react-icons/ai'

import { getAllUsers } from '../../../services/apiService'

import './ManageUser.scss'

const ManageUser = () => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})

    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        fetchListUsers()
    }, [])

    const fetchListUsers = async () => {
        let res = await getAllUsers()

        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }

    const resetUpdateData = () => {
        setDataUpdate({})
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage Users
            </div>

            <div className="user-content">
                <div className="btn-add-new">
                    <Button variant="outline-primary" onClick={() => setShowModalCreateUser(true)}>
                        <AiFillPlusCircle />
                        Add new user
                    </Button>
                </div>

                <div className="table-user-container">
                    <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                    />
                </div>

                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />

                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                />
            </div>
        </div>
    )
}

export default ManageUser