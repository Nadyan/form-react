import React, { useState } from 'react';

import { TextField, Button, Container } from '@material-ui/core';
import 'fontsource-roboto';
import './style.css';
import useErrors from '../../hooks/useErrors';

export default function AddressInfo(props) {

    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setStateAdd] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');

    // Custom Hook for field validation
    // const [error, validateField] = useErrors();

    function changeStep(direction) {
        const data = {street, number, city, state, country, postalCode};
        props.onSubmit(data, direction);
    }

    return (
        <Container component="article" maxWidth="sm">
            <form onSubmit={e => {
                e.preventDefault();
                changeStep('finish');
            }}>
                <TextField 
                    type="text"
                    id="field-street" 
                    label="Street" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={street}
                    onChange={e => {setStreet(e.target.value)}}
                />

                <TextField 
                    type="number"
                    id="field-number" 
                    label="Number" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={number}
                    onChange={e => {setNumber(e.target.value)}}
                />

                <TextField 
                    type="text"
                    id="field-city" 
                    label="City" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={city}
                    onChange={e => {setCity(e.target.value)}}
                />

                <TextField 
                    type="text"
                    id="field-state" 
                    label="State" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={state}
                    onChange={e => {setStateAdd(e.target.value)}}
                />

                <TextField 
                    type="text"
                    id="field-country" 
                    label="Country" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={country}
                    onChange={e => {setCountry(e.target.value)}}
                />

                <TextField 
                    type="text"
                    id="field-postal-code" 
                    label="Postal Code" 
                    variant="outlined" 
                    size="small" 
                    fullWidth={true}
                    margin="dense"
                    value={postalCode}
                    onChange={e => {setPostalCode(e.target.value)}}
                />

                <Container align="center" className="button-container">
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        fullWidth 
                        onClick={e => {
                            e.preventDefault();
                            changeStep('previous');
                        }}
                    >
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
