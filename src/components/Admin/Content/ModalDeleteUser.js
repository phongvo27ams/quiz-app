import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { toast } from 'react-toastify'

import { deleteUser } from '../../../services/apiService'

const ModalDeleteUser = (props) => {
    const {show, setShow, dataDelete, fetchListUsersWithPaginate, setCurrentPage} = props

    const handleClose = () => setShow(false)

    const handleSubmitDeleteUser = async () => {
        let data = await deleteUser(dataDelete.id)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose()
            setCurrentPage(1)
            await fetchListUsersWithPaginate(1)
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                centered
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete a user?</Modal.Title>
                </Modal.Header>

                <Modal.Body>The user {dataDelete && dataDelete.email ? dataDelete.email : ''} will be deleted.</Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>

                    <Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDeleteUser