
import { Container, Row } from 'react-bootstrap';
import './App.scss';
import Header from './component/Header';
import TableUsers from './component/TableUsers';
import ModalAddNew from './component/ModalAddNew';
import { useState } from 'react';
function App() {
  // console.log('this chao cac ban  ');
  const [showAddUser, setShowAddUser] = useState(false);
  const handleShowModalAdd = () => {
    setShowAddUser(true);
  }
  const handleClose = () => {
    setShowAddUser(false);
  }
  return (
    <div className='app-container'>
      <Container>
        <Row>
          <Header/>
          <div className='table-heading d-flex justify-content-end my-3'>
            <button className='btn btn-success mx-5' onClick={handleShowModalAdd}>
              Add new user
            </button>
              {/* <button className='btn btn-primary mx-5'>
                Edit user
              </button>
              <button className='btn btn-danger mx-5'>
                Delete user
              </button> */}
          </div>
          <TableUsers/>
        </Row>
      </Container>
      <ModalAddNew
        show={showAddUser}
        handleClose={handleClose}
      ></ModalAddNew>
    </div>
  );
}

export default App;
