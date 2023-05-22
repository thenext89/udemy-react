
import { Container, Row } from 'react-bootstrap';
import './App.scss';
import Header from './component/Header';
import TableUsers from './component/TableUsers';
import ModalAddNew from './component/ModalAddNew';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  // console.log('this chao cac ban  ');

  return (
    <div className='app-container'>
      <Container>
        <Row>
          <Header/>
          <TableUsers/>
        </Row>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </div>
  );
}

export default App;
