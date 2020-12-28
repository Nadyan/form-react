import React, { useState } from 'react';

import 'fontsource-roboto';
import { Button, TextField, Container } from '@material-ui/core';

export default function UserInfo() {

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

    function handleSubmit(event) {
        event.preventDefault();
        const dados = {
            email,
            password,
        };
        console.log(dados);
    }

    function handleValidate(value, id) {
        
        let valid = true;
        let text = '';

        if (id === 'field-email') {
            
            var re = /\S+@\S+\.\S+/; // regular expression
            if (!re.test(value)) {
                valid = false;
                text = 'Invalid e-mail.';
            }
            
            setError({
                email: {
                    valid: valid,
                    text: text
                },
                password: {
                    valid: error.password.valid,
                    text: error.password.text
                }
            });
        } else if (id === 'field-password') {
            
            if (value.length < 8) {
                valid = false;
                text ="Password must have at least 8 characters"
            }
            
            setError({
                email: {
                    valid: error.email.valid,
                    text: error.email.text
                },
                password: {
                    valid: valid,
                    text: text
                }
            });
        }
    }

    return (
        <Container component="article" maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <TextField 
                    type="email"
                    id="field-email" 
                    label="e-mail" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={email}
                    onChange={e => {setEmail(e.target.value)}}
                    error={!error.email.valid}
                    helperText={error.email.text}
                    onBlur={e => {handleValidate(e.target.value, e.target.id)}}
                />

                <TextField 
                    type="password"
                    id="field-password" 
                    label="Password" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={password}
                    onChange={e => {setPassword(e.target.value)}}
                    error={!error.password.valid}
                    helperText={error.password.text}
                    onBlur={e => {handleValidate(e.target.value, e.target.id)}}
                />

                <Button type="submit" variant="contained" color="primary">
                    Send
                </Button>
            </form>
        </Container>
    );
}