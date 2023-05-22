import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ModalDeleteUser = (props) => {
    const {show, setShow, dataDelete} = props

    const handleClose = () => setShow(false)

    const handleSubmitDeleteUser = () => {
        alert('Deleted')
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