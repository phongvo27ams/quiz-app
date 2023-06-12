import axios from '../utils/axiosCustomize'

const postCreateUser = (email, username, password, role, image) => {
    const data = new FormData()
    data.append('email', email)
    data.append('username', username)
    data.append('password', password)
    data.append('role', role)
    data.append('userImage', image)
    return axios.post('api/v1/participant', data)
}

const getAllUsers = () => {
    return axios.get('api/v1/participant/all')
}

const getUsersWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}

const putUpdateUser = (id, username, role, image) => {
    const data = new FormData()
    data.append('id', id)
    data.append('username', username)
    data.append('role', role)
    data.append('userImage', image)
    return axios.put('api/v1/participant', data)
}

const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } })
}

const postLogin = (userEmail, userPassword) => {
    return axios.post('api/v1/login', { email: userEmail, password: userPassword })
}

const postRegister = (userEmail, userPassword, userUsername) => {
    return axios.post('api/v1/register', { email: userEmail, password: userPassword, username: userUsername })
}

export { postCreateUser, getAllUsers, getUsersWithPaginate, putUpdateUser, deleteUser, postLogin, postRegister }