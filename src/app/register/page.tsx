'use client'
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Button, Row, Col, Card, CardBody, CardImg, Input, Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import { FormData } from '../component/formData/page';

const Register: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        phone: '',
        address: '',
        urlImage: '',
        dateOfBirth: '',
        description: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [success, setSuccess] = useState('');
    const router = useRouter();
    const [fileSelected, setFileSelected] = useState(false);

    useEffect(() => {
        const storedFormData = localStorage.getItem('formData');
        if (storedFormData) {
            try {
                setFormData(JSON.parse(storedFormData));
            } catch (error) {
                console.error("Error parsing stored form data:", error);
            }
        }

        const storedImageUrl = localStorage.getItem('urlImage');
        if (storedImageUrl) {
            setFormData(prevState => ({
                ...prevState,
                urlImage: storedImageUrl
            }));
        }
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageUrl = reader.result as string;
                setFormData(prevState => ({
                    ...prevState,
                    urlImage: imageUrl
                }));
                localStorage.setItem('urlImage', imageUrl);
                setFileSelected(true);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please choose a file.");
        }
    };

    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const validatePhone = (phone: string) => {
        return /^0[0-9]{9}$/.test(phone);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});
        setSuccess('');

        const { name, email, password, repeatPassword, phone, address, urlImage, dateOfBirth, description } = formData;
        let newErrors: { [key: string]: string } = {};

        if (!name) newErrors.name = 'Name is required.';
        if (!email) {
            newErrors.email = 'Email is required.';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Invalid email. Email must contain @.';
        }

        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        if (storedUsers.some((user: { email: string }) => user.email === email)) {
            newErrors.email = 'Email already exists. Please choose another email.';
        }

        if (!password) {
            newErrors.password = 'Password is required.';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
        }

        if (!repeatPassword) {
            newErrors.repeatPassword = 'Repeat password is required.';
        } else if (password !== repeatPassword) {
            newErrors.repeatPassword = 'Passwords do not match.';
        }

        if (!phone) {
            newErrors.phone = 'Phone number is required.';
        } else if (!validatePhone(phone)) {
            newErrors.phone = 'Invalid phone number. Phone number must contain 10 digits.';
        }

        if (!address) newErrors.address = 'Address is required.';
        if (!fileSelected) newErrors.urlImage = 'Please select an image.';
        if (!dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required.';
        if (!description) newErrors.description = 'Description is required.';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newUser = { name, email, password, phone, address, urlImage, dateOfBirth, description };
        localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
        setSuccess('Registration successful!');
        router.push("/login");
    };

    return (
        <Card className='text-black' style={{ borderRadius: '25px', maxWidth: '2000px', width: '30%', marginTop:'180px', marginBottom:'50px'}}>
            <CardBody>
                <Row className='justify-content-center'>
                    <Col md='10' className='d-flex flex-column align-items-center' style={{ width: '100%' }}>
                        <h1 className="register text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-1">Register</h1>
                        <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center' style={{ width: '100%' }}>
                            {success && <Alert color="success">{success}</Alert>}

                            <Row className='mb-2' style={{ width: '100%' }}>
                                <Col md='6' className='mb-2' style={{ paddingRight: '3rem' }}>
                                    <div className="input-group mb-4">
                                        <Input type='text' name='name' placeholder='Your name' style={{ fontSize: '19px' }} value={formData.name} onChange={handleChange} />
                                    </div>
                                    {errors.name && <div className="text-danger mb-2">{errors.name}</div>}

                                    <div className="input-group mb-4">
                                        <Input type='email' name='email' placeholder='Your email' style={{ fontSize: '19px' }} value={formData.email} onChange={handleChange} />
                                    </div>
                                    {errors.email && <div className="text-danger mb-2">{errors.email}</div>}

                                    <div className="input-group mb-4">
                                        <Input type='password' name='password' placeholder='Password' style={{ fontSize: '19px' }} value={formData.password} onChange={handleChange} />
                                    </div>
                                    {errors.password && <div className="text-danger mb-2">{errors.password}</div>}

                                    <div className="input-group mb-4">
                                        <Input type='password' name='repeatPassword' placeholder='Repeat password' style={{ fontSize: '19px' }} value={formData.repeatPassword} onChange={handleChange} />
                                    </div>
                                    {errors.repeatPassword && <div className="text-danger mb-2">{errors.repeatPassword}</div>}

                                    <div className="input-group mb-4">
                                        <Input type='textarea' name='description' placeholder='Your description' style={{ fontSize: '19px' }} value={formData.description} onChange={handleChange} />
                                    </div>
                                    {errors.description && <div className="text-danger mb-2">{errors.description}</div>}

                                    <Button type="submit" size='lg'>Register</Button>
                                </Col>

                                <Col md='6' className='mb-2'>
                                    <div className="input-group mb-4">
                                        <Input type='text' name='phone' placeholder='Your phone number' style={{ fontSize: '19px' }} value={formData.phone} onChange={handleChange} />
                                    </div>
                                    {errors.phone && <div className="text-danger mb-2">{errors.phone}</div>}

                                    <div className="input-group mb-4">
                                        <Input type='text' name='address' placeholder='Your address' style={{ fontSize: '19px' }} value={formData.address} onChange={handleChange} />
                                    </div>
                                    {errors.address && <div className="text-danger mb-2">{errors.address}</div>}

                                    <div className="input-group mb-4">
                                        <Input type='date' name='dateOfBirth' placeholder='Your date of birth' style={{ fontSize: '19px' }} value={formData.dateOfBirth} onChange={handleChange} />
                                    </div>
                                    {errors.dateOfBirth && <div className="text-danger mb-2">{errors.dateOfBirth}</div>}

                                    <div className="input-group mb-4">
                                        <Input 
                                            type='file' 
                                            accept="image/*" 
                                            name='urlImage' 
                                            onChange={handleImageChange} 
                                            style={{ fontSize: '20px' }} 
                                        />
                                    </div>
                                    {errors.urlImage && <div className="text-danger mb-2">{errors.urlImage}</div>}

                                    {fileSelected && formData.urlImage && (
                                        <CardImg src={formData.urlImage} style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
                                    )}
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default Register;
