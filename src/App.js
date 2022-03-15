import { useState } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

function App() {
  const [bookId, setBookId] = useState('');

  const getBookIdHandler = (id) => {
    console.log("the id of document ot be edited", id);
    setBookId(id);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" className='header'>
        <Container>
          <Navbar.Brand href="#home">Library</Navbar.Brand>
        </Container>
      </Navbar>
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BookList getBookId={getBookIdHandler}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
