import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const TableUser = (props) => {
    const { listUsers, handleClickBtnUpdate, handleClickBtnDelete } = props

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <tr key={`table-users-${index}`}>
                                <td>{index + 1}</td>
                                <td className="w-25">{item.username}</td>
                                <td className="w-25">{item.email}</td>
                                <td className="w-25">{item.role}</td>
                                <td>
                                    <Button
                                        variant="secondary"
                                        className="mx-2"
                                        onClick={() => handleClickBtnUpdate(item)}
                                    >
                                        Update
                                    </Button>

                                    <Button
                                        variant="danger"
                                        onClick={() => handleClickBtnDelete(item)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                }

                {listUsers && listUsers.length === 0 &&
                    <tr>
                        <td colSpan={5}>Table data is empty.</td>
                    </tr>
                }
            </tbody>
        </Table>
    )
}

export default TableUser