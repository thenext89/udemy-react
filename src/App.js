
import { Container, Row } from 'react-bootstrap';
import './App.scss';
import Header from './component/Header';
import TableUsers from './component/TableUsers';
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
    </div>
  );
}

export default App;
