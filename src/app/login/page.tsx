'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button, Container, Row, Col, Card, CardBody, CardImg, Input, Form, Alert } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();
    // const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // };

    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!formData.email || !formData.password) {
            setError('Email and password are required.');
            return;
        }

        if (!validateEmail(formData.email)) {
            setError('Invalid email.');
            return;
        }

        const storedFormDatas = JSON.parse(localStorage.getItem('users') || '[]');

        const matchingUser = storedFormDatas.find((user: { email: string; password: string; address: string; name: string; phone: string; urlImage: string;}) => 
        user.email === formData.email && user.password === formData.password
        );

        sessionStorage.setItem('formData', JSON.stringify(matchingUser));
        localStorage.setItem('formData', JSON.stringify(matchingUser));

        if (matchingUser) {
            sessionStorage.setItem('formData', JSON.stringify(matchingUser));
            const mockResponse = {
                id: 1,
                email: formData.email,
            };
            sessionStorage.setItem('loggedInUser', JSON.stringify(mockResponse));
            console.log('Login successful!', mockResponse);
            setSuccess('Login successful!');
            window.location.href = "/home";
        } else {
            setError('Incorrect email or password.');
        }
    };

    return (
        <Card fluid className='text-black ' style={{ borderRadius: '25px', maxWidth: '2000px', width:'40%' ,height: '410px', marginTop:'160px'  }}>
            <CardBody>
                <Row>
                    <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-black">Login</p>
                        <Form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
                            {error && <Alert color="danger">{error}</Alert>}
                            {success && <Alert color="success">{success}</Alert>}

                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{ width: '40px', height: '44px', fontSize: '12px' }}>
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                                <Input type='email' name='email' placeholder='Your email' style={{ fontSize: '19px' }} value={formData.email} onChange={handleChange} />
                            </div>

                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{ width: '40px', height: '44px', fontSize: '12px' }}>
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </div>
                                <Input name='password' placeholder='Password' style={{ fontSize: '19px' }} value={formData.password} onChange={handleChange} />
                                {/* <div className="input-group-append">
                                    <span className="input-group-text" style={{ cursor: 'pointer', marginLeft: '10px', width: '40px', height: '44px', fontSize: '12px' }} onClick={togglePasswordVisibility}>
                                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                    </span>
                                </div> */}
                            </div>

                            <Button type="submit" id="button" className='mb-4' size='lg'>Login</Button>
                        </Form>
                    </Col>
                    <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                        <CardImg src='https://ohay.vn/blog/wp-content/uploads/2020/01/petmart1-min.jpg' fluid />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default Login;
