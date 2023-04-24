import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { AiFillPlusCircle } from 'react-icons/ai'

const ModalCreateUser = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [role, setRole] = useState('USER')
    const [image, setImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    const handleUploadImage = e => {
        if (e.target && e.target.files && e.target.files[0]) {
            setPreviewImage(URL.createObjectURL(e.target.files[0]))
            setImage(e.target.files[0])
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add new user
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                centered
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword4"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="role" className="form-label">Role</label>
                            <select
                                id="role"
                                className="form-select"
                                onChange={e => setRole(e.target.value)}
                            >
                                <option selected>Choose...</option>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                        </div>

                        <div class="col-md-12">
                            <label class="form-label label-upload" htmlFor="image">
                                <AiFillPlusCircle />
                                Upload image
                            </label>
                            <input
                                type="file"
                                id="image"
                                hidden
                                onChange={e => handleUploadImage(e)}
                            />
                        </div>

                        <div className="col-md-12 img-preview">
                            {previewImage
                                ?
                                <img src={previewImage} alt='Preview' />
                                :
                                <span>Preview image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalCreateUser