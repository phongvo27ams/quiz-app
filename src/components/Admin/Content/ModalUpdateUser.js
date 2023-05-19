import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify'

import _ from 'lodash'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { AiFillPlusCircle } from 'react-icons/ai'

import { putUpdateUser } from '../../../services/apiService'

const ModalCreateUser = (props) => {
    const { show, setShow, dataUpdate, resetUpdateData } = props

    const handleClose = () => {
        setShow(false)
        setEmail('')
        setPassword('')
        setUsername('')
        setRole('')
        setImage('')
        setPreviewImage('')
        resetUpdateData()
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [role, setRole] = useState('USER')
    const [image, setImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email)
            setUsername(dataUpdate.username)
            setRole(dataUpdate.role)
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }
        }
    }, [dataUpdate])

    const handleUploadImage = e => {
        if (e.target && e.target.files && e.target.files[0]) {
            setPreviewImage(URL.createObjectURL(e.target.files[0]))
            setImage(e.target.files[0])
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }

    const handleSubmitCreateUser = async () => {
        const isValidEmail = validateEmail(email)
        if (!isValidEmail) {
            toast.error('Invalid email address')
            return
        }

        let data = await putUpdateUser(dataUpdate.id, username, role, image)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose()
            await props.fetchListUsers()
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
                size="xl"
                centered
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update a user</Modal.Title>
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
                                disabled={true}
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
                                disabled={true}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="role" className="form-label">Role</label>
                            <select
                                id="role"
                                className="form-select"
                                value={role}
                                onChange={e => setRole(e.target.value)}
                            >
                                <option value="selected">Choose a role...</option>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                        </div>

                        <div className="col-md-12">
                            <label className="form-label label-upload" htmlFor="image">
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

                    <Button variant="primary" onClick={handleSubmitCreateUser}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalCreateUser