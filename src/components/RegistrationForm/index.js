import React, { useState } from 'react';

import UserInfo from './User';
import PersonalInfo from './Personal';
import AddressInfo from './Address';

import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

export default function RegistrationForm() {
   
    const [step, setStep] = useState(0);
    const steps = [
        <UserInfo onSubmit={nextStep} />,
        <PersonalInfo onSubmit={nextStep} />,
        <AddressInfo onSubmit={onSubmit} />
    ];

    function nextStep() {
        setStep(step + 1);
    }

    function onSubmit(event) {
        event.preventDefault();
        alert('Form sent');
    }
   
    function showStep(step) {
        return steps[step];
    }

    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" align="center">
                Registration Form
            </Typography>
            
            {
                showStep(step)
            }
        </Container>
    );
}
