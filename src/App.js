import { Navbar, Container, Row, Col, Card, Button } from 'react-bootstrap';
import './App.css';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='header'>
        <Container>
          <Navbar.Brand href="#home">Library</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <AddBook />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BookList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
