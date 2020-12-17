import { Button, TextField, Switch, Checkbox } from '@material-ui/core';
import React from 'react';

export default function RegistrationForm() {

    // aahooooy!

    return (
        <div>
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

                <Switch 
                    id="field-hints"
                    label="Hints"
                    size="small"
                />

                <Checkbox
                    id="field-newsletter"
                    label="Newsletter"
                    size="small"
                />

                <Button type="submit" variant="contained" color="primary">
                    Send
                </Button>
            </form>
        </div>
    );
}
