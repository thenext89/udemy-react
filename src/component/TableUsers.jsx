
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../service/UserSevice';
function TableUsers(props) {
    const [listUsers, setListUsers] = useState([]);
    //mounted
    useEffect(() => {
        getUsers();

    }, [])
    const getUsers = async () => {
        const res = await fetchAllUser();
        if (res && res.data) {
            setListUsers(res.data);
        }
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
        </Container>
    );
}

export default TableUsers;