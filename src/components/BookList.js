
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import BookDataService from '../services/book.services';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        const data = await BookDataService.getAllBooks();
        console.log(data.docs);

        setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    return (
        <>
            <pre>{JSON.stringify(books, undefined, 2)}</pre>
            <div className="my-2">
                <Button variant="dark edit">
                    Refresh List
                </Button>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Book Title</th>
                        <th>Book Author</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((doc, index) => {
                            return (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{doc.title}</td>
                                    <td>{doc.author}</td>
                                    <td>{doc.status}</td>
                                    <td>
                                        <Button
                                            variant='secondary'
                                            className='edit'

                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant='danger'
                                            className='delete'

                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    );
};

export default BookList;