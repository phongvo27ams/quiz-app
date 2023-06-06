import React, { useEffect, useState } from 'react'

import TableUser from './TableUser'
import TableUserPaginate from './TableUserPaginate'
import ModalCreateUser from './ModalCreateUser'
import ModalUpdateUser from './ModalUpdateUser'
import ModalDeleteUser from './ModalDeleteUser'

import Button from 'react-bootstrap/Button'

import { AiFillPlusCircle } from 'react-icons/ai'

import { getAllUsers, getUsersWithPaginate } from '../../../services/apiService'

import './ManageUser.scss'

const ManageUser = () => {
    const LIMIT_USER = 6
    const [pageCount, setPageCount] = useState(0)

    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)
    const [dataDelete, setDataDelete] = useState({})

    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        fetchListUsersWithPaginate(1)
    }, [])

    const fetchListUsers = async () => {
        let res = await getAllUsers()

        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const fetchListUsersWithPaginate = async (page) => {
        let res = await getUsersWithPaginate(page, LIMIT_USER)

        if (res.EC === 0) {
            setListUsers(res.DT.users)
            setPageCount(res.DT.totalPages)
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }

    const resetUpdateData = () => {
        setDataUpdate({})
    }

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true)
        setDataDelete(user)
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
                    <TableUserPaginate
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                        pageCount={pageCount}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
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

                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    )
}

export default ManageUser