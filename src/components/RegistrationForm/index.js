import { Button, TextField } from '@material-ui/core';
import React, { Fragment } from 'react';

export default function RegistrationForm() {

    // aahooooy!

    return (
        <Fragment>
            <h1>Registration Form</h1>
            <form>

                <TextField 
                    id="field-first-name" 
                    label="First name" 
                    variant="outlined" 
                    size="small" 
                    fullWidth="true"
                />

                <TextField 
                    id="field-last-name" 
                    label="Last name" 
                    variant="outlined" 
                    size="small" 
                    fullWidth="true"
                />

                <TextField 
                    id="field-social-id" 
                    label="Social ID" 
                    variant="outlined" 
                    size="small" 
                    fullWidth="true"
                />

                <label>Hints</label>
                <input type="checkbox"></input>

                <label>Newsletter</label>
                <input type="checkbox"></input>

                <Button type="submit" variant="contained" color="primary">
                    Send
                </Button>
            </form>
        </Fragment>
    );
}
