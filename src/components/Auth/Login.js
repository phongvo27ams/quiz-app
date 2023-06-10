import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { postLogin } from '../../services/apiService'

import { toast } from 'react-toastify'

import './Login.scss'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleLogin = async () => {
        const data = await postLogin(email, password)

        if (data && data.EC === 0) {
            toast.success(data.EM)
            navigate('/')
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }

    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an accound yet?</span>
                <button>Sign up</button>
            </div>

            <div className="title col-4 mx-auto">
                Quiz App
            </div>

            <div className="welcome col-4 mx-auto">
                Hello, who's this?
            </div>

            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <span>Forgot password?</span>

                <div>
                    <button
                        className="btn-submit"
                        onClick={() => handleLogin()}
                    >
                        Log in
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

export default Login