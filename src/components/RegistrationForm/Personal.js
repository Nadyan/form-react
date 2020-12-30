import React, { useState } from 'react';

import 'fontsource-roboto';
import { Button, TextField, Container, FormControlLabel, Switch, Checkbox } from '@material-ui/core';

import validaCPF from './validate';
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

    /*
    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            firstName,
            lastName,
            socialId, 
            hints,
            newsletter
        };
        console.log(data);
    }
    */

    function handleValidate(value, id) {
        
        let valid = true;
        let text = '';

        if (id === 'field-social-id') {

            if (value.length !== 11) {
                valid = false;
                text = 'Social ID must have 11 digits';
            }
            else if (!validaCPF(value)) {
                valid = false;
                text = 'Social ID number is invalid'
            }
            
            setError({
                socialId: {
                    valid: valid,
                    text: text
                },
                firstName: {
                    valid: error.firstName.valid,
                    text: error.firstName.text
                },
                lastName: {
                    valid: error.lastName.valid,
                    text: error.lastName.text
                }
            });
        } else if (id === 'field-first-name') {
            
            if (value.length === 0) {
                valid = false;
                text ="Last name can't be blank"
            }
            
            setError({
                socialId: {
                    valid: error.socialId.valid,
                    text: error.socialId.text
                },
                firstName: {
                    valid: valid,
                    text: text
                },
                lastName: {
                    valid: error.lastName.valid,
                    text: error.lastName.text
                }
            });
        } else if (id === 'field-last-name') {
            
            if (value.length === 0) {
                valid = false;
                text ="Last name can't be blank"
            }

            setError({
                socialId: {
                    valid: error.socialId.valid,
                    text: error.socialId.text
                },
                firstName: {
                    valid: error.firstName.valid,
                    text: error.firstName.text
                },
                lastName: {
                    valid: valid,
                    text: text
                }
            });
        }
    }

    function changeStep(direction) {
        const data = {firstName, lastName, socialId, hints, newsletter};
        props.onSubmit(data, direction);
    }

    return (
        <Container component="article" maxWidth="sm">
            <form onSubmit={e => {
                e.preventDefault();
                changeStep('next');
            }}>
                <TextField 
                    id="field-first-name" 
                    label="First name" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={firstName}
                    onChange={e => {setFirstName(e.target.value)}}
                    error={!error.firstName.valid}
                    helperText={error.firstName.text}
                    onBlur={e => {handleValidate(e.target.value, e.target.id)}}
                    required
                />

                <TextField 
                    id="field-last-name" 
                    label="Last name" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={lastName}
                    onChange={e => {setLastName(e.target.value)}}
                    error={!error.lastName.valid}
                    helperText={error.lastName.text}
                    onBlur={e => {handleValidate(e.target.value, e.target.id)}}
                    required
                />

                <TextField 
                    id="field-social-id" 
                    label="Social ID" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={socialId}
                    onChange={e => {setSocialId(e.target.value)}}
                    error={!error.socialId.valid}
                    helperText={error.socialId.text}
                    onBlur={e => {handleValidate(e.target.value, e.target.id)}}
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
