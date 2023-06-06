import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const TableUserPaginate = (props) => {
    const { listUsers, handleClickBtnUpdate, handleClickBtnDelete, pageCount, fetchListUsersWithPaginate, currentPage, setCurrentPage } = props

    const handlePageClick = (e) => {
        fetchListUsersWithPaginate(+e.selected + 1)
        setCurrentPage(+e.selected + 1)
    }

    return (
        <>
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
                                    <td>{item.id}</td>
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

            <div className="d-flex justify-content-center">
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={currentPage - 1}
                />
            </div>
        </>
    )
}

export default TableUserPaginate