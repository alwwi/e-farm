import React, { useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import '../Components/Font.css'


function Login() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }

    return (
        <div style={{ width: '100%', height: '470px', border: '7px solid #DBAE84', borderRadius: '8px', backgroundColor:'white',padding:'50px' }}>
            <Container className=''>
                <div className='d-flex txt-poppins-semiBold justify-content-center'>
                    <h1>Login In To Your Account</h1>
                </div>
                <br />
                <div className='d-flex justify-content-center align-items-center'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId='validationEmail'>
                            <InputGroup hasValidation style={{ width: '280px' }}>
                                <Form.Control type='text' placeholder='Email Address' required style={{ borderRadius: '6.5px', height: '42px' }} />
                                <Form.Control.Feedback type='invalid'>Please fill in your email address</Form.Control.Feedback>
                            </InputGroup>

                        </Form.Group>

                        <br />

                        <Form.Group controlId='validationPassword'>
                            <Form.Control type='password' placeholder='Password' required style={{ borderRadius: '6.5px', height: '42px', width: '280px' }} />
                            <Form.Control.Feedback type='invalid'>Please fill in your Password</Form.Control.Feedback>
                        </Form.Group>

                        <br />

                        <Button type='submit' className='align-items-center justify-content-center'>
                            Login
                        </Button>
                    </Form>
                </div>

            </Container>
        </div>
    )
}

export default Login
