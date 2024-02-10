import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import '../Components/Font.css';
import '../Components/Color.css';

function Register() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <>
            <div className="d-flex txt-poppins-semiBold justify-content-center">
                <h1>Create An Account</h1>
            </div>
            <br />
            <div className="d-flex justify-content-center align-items-center">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="validationEmail">
                        <InputGroup hasValidation style={{ width: '280px' }}>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                required
                                style={{ borderRadius: '6.5px', height: '42px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please fill in your username
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="validationEmail">
                        <InputGroup hasValidation style={{ width: '280px' }}>
                            <Form.Control
                                type="email"
                                placeholder="Email Address"
                                required
                                style={{ borderRadius: '6.5px', height: '42px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please fill in a valid email address
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="validationPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                            style={{ borderRadius: '6.5px', height: '42px', width: '280px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please fill in your password
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="validationConfirmPassword">
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            required
                            style={{ borderRadius: '6.5px', height: '42px', width: '280px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please confirm your password
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <div className="d-flex justify-content-center">
                        <Button
                            variant="success"
                            type="submit"
                            className="px-5 bg-color txt-poppins-semiBold"
                            style={{ borderRadius: '12px' }}
                        >
                            Register
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Register;
