import React, { useState } from 'react';

import 'fontsource-roboto';
import { Button, TextField, Container } from '@material-ui/core';

import { handleValidate } from './validate';
import './style.css';

export default function UserInfo(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(
        {
            email: {
                valid: true,
                text: ""
            },
            password: {
                valid: true,
                text: ""
            }
        }
    );

    function changeStep(direction) {
        const data = {email, password};
        props.onSubmit(data, direction);
    }

    function callHandleValidate(event) {
        const { name, value } = event.target;
        const newState = {...error};
        newState[name] = handleValidate(value, name);
        setError(newState);
    }

    return (
        <Container component="article" maxWidth="sm">
            <form onSubmit={e => {
                e.preventDefault();
                changeStep('next');
            }}>
                <TextField 
                    type="email"
                    id="field-email" 
                    name="email"
                    label="e-mail" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={email}
                    onChange={e => {setEmail(e.target.value)}}
                    error={!error.email.valid}
                    helperText={error.email.text}
                    onBlur={e => {callHandleValidate(e)}}
                    required
                />

                <TextField 
                    type="password"
                    id="field-password"
                    name="password" 
                    label="Password" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={password}
                    onChange={e => {setPassword(e.target.value)}}
                    error={!error.password.valid}
                    helperText={error.password.text}
                    onBlur={e => {callHandleValidate(e)}}
                    required
                />

                
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Next
                </Button>
                
            </form>
        </Container>
    );
}