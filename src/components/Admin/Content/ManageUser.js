import ModalCreateUser from './ModalCreateUser'

import './ManageUser.scss'

const ManageUser = () => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">
                Manage User
            </div>

            <div classNameName="user-content">
                <div>
                    <ModalCreateUser />
                </div>

                <div>
                    Users table
                </div>
            </div>
        </div>
    )
}

export default ManageUser