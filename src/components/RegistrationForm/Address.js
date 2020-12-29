import React, { useState } from 'react';

import { TextField, Button, Container } from '@material-ui/core';
import 'fontsource-roboto';

export default function AddressInfo(props) {

    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setStateAdd] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');

    /*
    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            street,
            number,
            city,
            country,
            postalCode
        };
        console.log(data);
    }
    */

    return (
        <Container component="article" maxWidth="sm">
            <form onSubmit={props.onSubmit}>
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
                />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </form>
        </Container>
    );
}