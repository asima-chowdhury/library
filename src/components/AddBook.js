import React, { useState } from 'react';
import { Button, ButtonGroup, Form, InputGroup } from 'react-bootstrap';

const AddBook = () => {
    const [status, setStatus] = useState("Available");
    const [flag, setFlag] = useState(true);
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBookTitle">
                    <InputGroup>
                        <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Book Title"
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookAuthor">
                    <InputGroup>
                        <InputGroup.Text id="formBookTitle">A</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Book Author"
                        />
                    </InputGroup>
                </Form.Group>
                <ButtonGroup aria-label="Basic example" className="mb-3">
                    <Button
                        disabled={flag}
                        variant="success"
                        onClick={(e) => {
                            setStatus("Available");
                            setFlag(true);
                        }}
                    >
                        Available
                    </Button>
                    <Button
                        disabled={!flag}
                        variant="danger"
                        onClick={(e) => {
                            setStatus("Not Available");
                            setFlag(false);
                        }}
                    >
                        Not Available
                    </Button>
                </ButtonGroup>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="Submit">
                        Add/ Update
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default AddBook;