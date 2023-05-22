
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../service/UserSevice';
function TableUsers(props) {
    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    //mounted
    useEffect(() => {
        getUsers();

    }, [])
    const getUsers = async (page) => {
        const res = await fetchAllUser(page);
        if (res && res.data) {
            setTotalUsers(res.total);
            setTotalPage(res.total_pages);
            setListUsers(res.data);
        }
    }
    const handlePageClick = (event) => {
        getUsers(+event.selected + 1);
    }
    return (
        <Container className='px-5'>
            <h2 className='lead bold'>Table users</h2>
            <Table striped bordered hover variant="dark" className='react-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`users-${index}`}>
                                    <td>{item.id}</td>
                                    <td className='avatar'><img src={item.avatar} alt="" /></td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                
            </Table>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPage}
                previousLabel="< previous"
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
                // renderOnZeroPageCount={null}
            />
        </Container>
    );
}

export default TableUsers;