import ModalCreateUser from './ModalCreateUser'

import './ManageUser.scss'

const ManageUser = () => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage Users
            </div>

            <div className="user-content">
                <div className="btn-add-new">
                    <ModalCreateUser />
                </div>

                <div className="table-user-container">
                    Users table
                </div>
            </div>
        </div>
    )
}

export default ManageUser