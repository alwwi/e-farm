import { app } from '../ConnectToDB/Firebase-config';
import { getDatabase ,ref, push, child, get} from 'firebase/database';
import React, { useState } from 'react';
import {  Button, Form, InputGroup } from 'react-bootstrap';  
import '../Components/Font.css';
import '../Components/Color.css';

function Register() {
    const [validated, setValidated] = useState(false); // state untuk menampilkan pesan error, dan memvalidasi form apakah sudah terisi atau belum
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();
        const usernameExist = await checkUsernameExist(username);
        const form = document.getElementById('registerForm');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            alert("Username, Email, dan Password tidak boleh kosong.");
            return; 
        }
        
        if(usernameExist){
            alert('Username sudah digunakan, silahkan gunakan username lain!');
            return;
        }
        
        if (!emailRegex.test(email)) {
            alert('Email tidak valid');
            return;
        }
        
        if(password !== confirmPassword){
            alert('Password dan konfirmasi password harus sama');
            return;
        }else if(password.length < 6){
            alert('password harus tidak kurang dari 6 karakter');
            return;
        }
        
        if (form && form.checkValidity() === false) {
        event.stopPropagation();
        return
        }

        const db = getDatabase(app);
        const userRef = ref(db,'user');
        push(userRef,{
                username,email,password,confirmPassword
            })
            .then((res) => {

                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');

                setValidated(false);

                alert('Registrasi berhasil! Silahkan login untuk melanjutkan!');
            })
            .catch(error => {
                alert('Registrasi gagal! Silahkan coba lagi!', error);
            })
        setValidated(true);
    }

    const checkUsernameExist = async(username) => {
        const db = ref(getDatabase(app));
        // const userRef = ref(db,'user');
        const snapshot = await get(child(db,'user'));
        if ((snapshot.exists())) {
            let exists = false;
            snapshot.forEach((childSnapshot) => {
                const userData = childSnapshot.val()
                if(userData.username === username){
                    exists = true;
                }
            })
            return exists
        }else{
            return false
        }   
    }

    return (
        <>
            <div className="d-flex txt-poppins-semiBold justify-content-center">
                <h1>Create An Account</h1>
            </div>
            <br />
            <div className="d-flex justify-content-center align-items-center">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="validationUsername"> 
                        <InputGroup hasValidation style={{ width: '280px' }}>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(event) => setName(event.target.value)}
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
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
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
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
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
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
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
