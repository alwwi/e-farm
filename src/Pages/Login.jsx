import { app } from '../ConnectToDB/Firebase-config';
import React, { useState } from 'react'
import { getDatabase, ref, query, orderByChild, equalTo, get } from 'firebase/database';
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import '../Components/Font.css'
import Register from './Register';


function Login() {
    const [validated, setValidated] = useState(false);
    const [formType, setFormType] = useState('login')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (email, password) => {
        console.log('attemping login with:', email, password);

        const db = getDatabase(app);
        console.log('db', db);
        const userRef = ref(db, 'user');
        const userQuery = query(userRef, orderByChild('email'), equalTo(email));

        try {
            const snapshot = await get(userQuery);
            if(snapshot.exists()){
                let loginSuccess = false;
                snapshot.forEach((childSnapshot) => {
                    const userData = childSnapshot.val();
                    console.log(userData);

                    if(userData.password === password){
                        loginSuccess = true;
                    }
                });
                if(loginSuccess){
                    console.log('Login Success');
                } else {
                    console.log('Password is incorrect');
                }
            } else {
                console.log('Email is not registered');
            }
        } catch (error) {
            console.log('Login Failed',error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity()) {
            login(email, password);
        }
        setValidated(true);
    }

    const switchForm = (type) => {
        setFormType(type)
    }

    return (
        <div
        // style={{ width: '100%', height: '470px', border: '7px solid #DBAE84', borderRadius: '8px', backgroundColor: 'white', padding: '50px' }}
        >
            <Container className=''>
                {formType === 'login' ? (
                    <>
                        <div className='d-flex txt-poppins-semiBold justify-content-center'>
                            <h1>Login In To Your Account</h1>
                        </div>

                        <br />

                        <div className='d-flex justify-content-center align-items-center'>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group controlId='validationEmail'>
                                    <InputGroup hasValidation style={{ width: '280px' }}>
                                        <Form.Control
                                            type='email'
                                            value={email}
                                            onChange={(event) => { setEmail(event.target.value) }}
                                            placeholder='Email Address'
                                            required style={{ borderRadius: '6.5px', height: '42px' }}
                                        />
                                        <Form.Control.Feedback type='invalid'>Please fill in your email address</Form.Control.Feedback>
                                    </InputGroup>

                                </Form.Group>

                                <br />

                                <Form.Group controlId='validationPassword'>
                                    <Form.Control
                                        type='password'
                                        placeholder='Password'
                                        value={password}
                                        onChange={(event) => { setPassword(event.target.value) }}
                                        required style={{ borderRadius: '6.5px', height: '42px', width: '280px' }}
                                    />
                                    <Form.Control.Feedback type='invalid'>Please fill in your Password</Form.Control.Feedback>
                                </Form.Group>

                                <br />

                                <div className='d-flex justify-content-center'>
                                    <Button
                                        variant='success'
                                        type='submit'
                                        className='px-5 bg-color txt-poppins-semiBold'
                                        style={{ borderRadius: '12px' }}
                                    >
                                        Login
                                    </Button>
                                </div>

                                <div className='d-flex justify-content-center'>
                                    <Button
                                        variant='link'
                                        onClick={() => switchForm('Register')}
                                        className='txt-poppins-light'
                                        style={{ fontSize: '14px', color: '#023E24' }}
                                    >
                                        create an account
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </>
                ) : (
                    <>
                        <Register />

                        <div className='d-flex justify-content-center'>
                            <Button
                                variant='link'
                                onClick={() => switchForm('login')}
                                className='txt-poppins-light'
                                style={{ fontSize: '14px', color: '#023E24' }}
                            >
                                Login In To Your Account
                            </Button>
                        </div>
                    </>
                )}

            </Container>
        </div>
    )
}

export default Login
