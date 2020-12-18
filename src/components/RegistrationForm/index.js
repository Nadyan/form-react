import React, { useState } from 'react';
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

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [socialId, setSocialId] = useState('');
    const [hints, setHints] = useState(false);
    const [newsletter, setNewsLetter] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const dados = {
            firstName,
            lastName,
            socialId,
            hints,
            newsletter
        };
    }

    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3">
                Registration Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="field-first-name" 
                    label="First name" 
                    variant="outlined" 
                    size="small" 
                    fullWidth="true"
                    margin="dense"
                    value={firstName}
                    onChange={e => {setFirstName(e.target.value)}}
                />

                <TextField 
                    id="field-last-name" 
                    label="Last name" 
                    variant="outlined" 
                    size="small" 
                    fullWidth="true"
                    margin="dense"
                    value={lastName}
                    onChange={e => {setLastName(e.target.value)}}
                />

                <TextField 
                    id="field-social-id" 
                    label="Social ID" 
                    variant="outlined" 
                    size="small" 
                    fullWidth="true"
                    margin="dense"
                    value={socialId}
                    onChange={e => {setSocialId(e.target.value)}}
                />

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
                            onChange={e => setNewsLetter(e.target.checked)}
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
