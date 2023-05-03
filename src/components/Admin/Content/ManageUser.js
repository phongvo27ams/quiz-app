import ModalCreateUser from './ModalCreateUser'

import './ManageUser.scss'
import TableUser from './TableUser'

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
                    <TableUser />
                </div>
            </div>
        </div>
    )
}

export default ManageUser