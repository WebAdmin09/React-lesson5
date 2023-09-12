import React, { useState } from 'react'
import { Button, Form, } from 'react-bootstrap'
import style from './LoginPage.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const LoginPage = () => {

    const [state, setState] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        console.log(e);
        if (state.email === 'admin' && state.password === '12345') {
            navigate('/debts')
        } else {
            toast.error('Error')
        }
    }
    const handleChangeEmail = (e) => {
        setState((prev) => ({
            ...prev,
            email: e.target.value
        }));
    }
    const handleChangePassword = (e) => {
        setState((prev) => ({
            ...prev, password: e.target.value
        }))
    }
    return (
        <div className={style['wrapper']}>
            <div className='container'>
                <div className={style['wrapper__item']}>
                    <h1 className={style['login__heading']}>Log In</h1>
                    <div className={style['login__form']}>
                        <Form className='display-flex align-item-center justify-content-center row mb-5' onClick={(e) => submit(e)} >
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label className={style['label']}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={state.email} onChange={(e) => handleChangeEmail(e)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label className={style['label']}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={state.password} onChange={(e) => handleChangePassword(e)} />
                            </Form.Group>
                            <Button className={style['btn']}>Submit</Button>
                        </Form>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default LoginPage
