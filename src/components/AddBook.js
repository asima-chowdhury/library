import React, { useState } from 'react';
import { Alert, Button, ButtonGroup, Form, InputGroup } from 'react-bootstrap';
import BookDataService from '../services/book.services';

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("Available");
    const [flag, setFlag] = useState(true);
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (title === "" || author === "") {
            setMessage({ error: true, msg: "All fields are mandatory!" });
            return;
        }

        const newBook = { title, author, status };

        console.log(newBook);

        try {
            await BookDataService.addBooks(newBook);
            setMessage({ error: false, msg: "New book added successfully!" });
        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }

        setTitle("");
        setAuthor("");
    };

    return (
        <>
            <div className="p-4 box">
                {message?.msg && (<Alert
                    variant={message?.error ? "danger" : "success"}
                    onClose={() => setMessage("")}
                    dismissible>
                    {message?.msg}
                </Alert>)}
                
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="my-3" controlId="formBookTitle">
                        <InputGroup>
                            <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Book Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBookAuthor">
                        <InputGroup>
                            <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Book Author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
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
            </div>
        </>
    );
};

export default AddBook;