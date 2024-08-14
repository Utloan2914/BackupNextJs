

'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button, Card, CardBody, CardImg, Input, Form, Alert, Row, Col } from 'reactstrap';
import { useRouter } from 'next/navigation';
import { useLanguage } from "@/context/languageContext";

function Login() {
    const { language } = useLanguage(); // Lấy ngôn ngữ từ ngữ cảnh
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!formData.email || !formData.password) {
            setError(language === 'en' ? 'Email and password are required.' : 'Email và mật khẩu là bắt buộc.');
            return;
        }

        if (!validateEmail(formData.email)) {
            setError(language === 'en' ? 'Invalid email.' : 'Email không hợp lệ.');
            return;
        }

        const storedFormDatas = JSON.parse(localStorage.getItem('users') || '[]');

        const matchingUser = storedFormDatas.find((user: { email: string; password: string; }) => 
            user.email === formData.email && user.password === formData.password
        );

        if (matchingUser) {
            localStorage.setItem('formData', JSON.stringify(matchingUser));
            const mockResponse = {
                id: 1,
                email: formData.email,
            };  
            localStorage.setItem('loggedInUser', JSON.stringify(mockResponse));
            setSuccess(language === 'en' ? 'Login successful!' : 'Đăng nhập thành công!');
            router.push("/home"); 
        } else {
            setError(language === 'en' ? 'Incorrect email or password.' : 'Email hoặc mật khẩu không chính xác.');
        }
    };

    return (
        <Card fluid className='text-black' style={{ borderRadius: '25px', maxWidth: '2000px', width: '40%', height: '410px', marginTop: '80px', marginBottom: '80px' }}>
            <CardBody>
                <Row>
                    <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-black">
                            {language === 'en' ? 'Login' : 'Đăng nhập'}
                        </p>
                        <Form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
                            {error && <Alert color="danger">{error}</Alert>}
                            {success && <Alert color="success">{success}</Alert>}

                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{ width: '40px', height: '44px', fontSize: '12px' }}>
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                                <Input type='email' name='email' placeholder={language === 'en' ? 'Your email' : 'Email của bạn'} style={{ fontSize: '19px' }} value={formData.email} onChange={handleChange} />
                            </div>

                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{ width: '40px', height: '44px', fontSize: '12px' }}>
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </div>
                                <Input name='password' placeholder={language === 'en' ? 'Password' : 'Mật khẩu'} type='password' style={{ fontSize: '19px' }} value={formData.password} onChange={handleChange} />
                            </div>

                            <Button type="submit" id="button" className='mb-4' size='lg'>{language === 'en' ? 'Login' : 'Đăng nhập'}</Button>
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

