import React from 'react';
import 'fontsource-roboto';
import { 
    Button, 
    TextField, 
    Switch, 
    Checkbox, 
    Container, 
    FormControlLabel,
    Typography
} from '@material-ui/core';

export default function RegistrationForm() {

    // aahooooy!

    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3">
                Registration Form
            </Typography>
            <form>
                <TextField 
                    id="field-first-name" 
                    label="First name" 
                    variant="outlined" 
                    size="small" 
                    fullWidth="true"
                    margin="dense"
                />

                <TextField 
                    id="field-last-name" 
                    label="Last name" 
                    variant="outlined" 
                    size="small" 
                    fullWidth="true"
                    margin="dense"
                />

                <TextField 
                    id="field-social-id" 
                    label="Social ID" 
                    variant="outlined" 
                    size="small" 
                    fullWidth="true"
                    margin="dense"
                />

                <FormControlLabel
                    control = {
                        <Switch 
                            id="field-hints"
                            size="small"
                            color="primary"
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
                        />
                    }
                    label="Newsletter"
                />

                <Button type="submit" variant="contained" color="primary">
                    Send
                </Button>
            </form>
        </Container>
    );
}
