import React, { useState } from 'react';

import 'fontsource-roboto';
import { Button, TextField, Container, FormControlLabel, Switch, Checkbox } from '@material-ui/core';

import { handleValidate, verifyAllValid } from './validate';
import './style.css';

export default function PersonalInfo(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [socialId, setSocialId] = useState('');
    const [hints, setHints] = useState(false);
    const [newsletter, setNewsletter] = useState(false);
    const [error, setError] = useState(
        {
            socialId: {
                valid: true,
                text: ""
            },
            firstName: {
                valid: true,
                text: ""
            },
            lastName: {
                valid: true,
                text: ""
            }
        }
    );

    function callHandleValidate(event) {
        const { name, value } = event.target;
        const newState = {...error};
        newState[name] = handleValidate(value, name);
        setError(newState);
    }

    function changeStep(direction) {
        const data = {firstName, lastName, socialId, hints, newsletter};
        props.onSubmit(data, direction);
    }

    return (
        <Container component="article" maxWidth="sm">
            <form onSubmit={e => {
                e.preventDefault();
                if (verifyAllValid(error)) {
                    changeStep('next');
                }
            }}>
                <TextField 
                    id="field-first-name" 
                    name="firstName"
                    label="First name" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={firstName}
                    onChange={e => {setFirstName(e.target.value)}}
                    error={!error.firstName.valid}
                    helperText={error.firstName.text}
                    onBlur={e => {callHandleValidate(e)}}
                    required
                />

                <TextField 
                    id="field-last-name" 
                    name="lastName"
                    label="Last name" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={lastName}
                    onChange={e => {setLastName(e.target.value)}}
                    error={!error.lastName.valid}
                    helperText={error.lastName.text}
                    onBlur={e => {callHandleValidate(e)}}
                    required
                />

                <TextField 
                    id="field-social-id" 
                    name="socialId"
                    label="Social ID" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={socialId}
                    onChange={e => {setSocialId(e.target.value)}}
                    error={!error.socialId.valid}
                    helperText={error.socialId.text}
                    onBlur={e => {callHandleValidate(e)}}
                    required
                />

                <Container align="center" className="button-container">
                    <FormControlLabel
                        control = {
                            <Switch 
                                id="field-hints"
                                size="small"
                                color="primary"
                                checked={hints}
                                onChange={e => {setHints(e.target.checked)}}
                            />
                        }
                        label = "Hints"
                    />

                    <FormControlLabel
                        control = {
                            <Checkbox
                                id="field-newsletter"
                                label="Newsletter"
                                size="small"
                                color="primary"
                                checked={newsletter}
                                onChange={e => setNewsletter(e.target.checked)}
                            />
                        }
                        label="Newsletter"
                    />
                </Container>

                <Container align="center" className="button-container">
                    <Button variant="contained" color="secondary" fullWidth onClick={e => {
                        e.preventDefault();
                        changeStep('previous');
                    }}>
                        Previous
                    </Button>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Next
                    </Button>
                </Container>
            </form>
        </Container>
    );
}
