import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

import { postRegister } from '../../services/apiService'

import './Register.scss'

import { VscEye, VscEyeClosed } from 'react-icons/vsc'

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const [isShowPassword, setIsShowPassword] = useState('')

    const navigate = useNavigate()

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }

    const handleRegister = async () => {
        const isValidEmail = validateEmail(email)

        if (!isValidEmail) {
            toast.error('Invalid email')
            return
        }
        if (!password) {
            toast.error('Please enter a pasword')
            return
        }
        if (!username) {
            toast.error('Please enter a username')
            return
        }

        const data = await postRegister(email, password, username)

        if (data && data.EC === 0) {
            toast.success(data.EM)
            navigate('/login')
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }

    return (
        <div className="register-container">
            <div className="header">
                <span>Already have an accound?</span>
                <button onClick={() => navigate('/login')}>Log in</button>
            </div>

            <div className="title col-4 mx-auto">
                Quiz App
            </div>

            <div className="welcome col-4 mx-auto">
                Start your journey?
            </div>

            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email (*)</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group password-group">
                    <label>Password (*)</label>
                    <input
                        type={isShowPassword ? "text" : "password"}
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {isShowPassword
                        ?
                        <span className="icons-eye" onClick={() => setIsShowPassword(false)}>
                            <VscEye />
                        </span>
                        :
                        <span className="icons-eye" onClick={() => setIsShowPassword(true)}>
                            <VscEyeClosed />
                        </span>
                    }
                </div>

                <div className='form-group'>
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <button
                        className="btn-submit"
                        onClick={() => handleRegister()}
                    >
                        Create my account
                    </button>
                </div>

                <div className="text-center">
                    <span>&#60;--- </span>
                    <span className="back" onClick={() => { navigate('/') }}>
                        Go to Home Page
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Register