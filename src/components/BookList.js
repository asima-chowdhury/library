
import React from 'react';
import { Button, Table } from 'react-bootstrap';

const BookList = () => {
    return (
        <>
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
                    <tr>
                        <td>index</td>
                        <td>title</td>
                        <td>author</td>
                        <td>status</td>
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
                </tbody>
            </Table>
        </>
    );
};

export default BookList;