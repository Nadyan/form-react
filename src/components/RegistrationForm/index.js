import React, { useEffect, useState } from 'react';

import UserInfo from './User';
import PersonalInfo from './Personal';
import AddressInfo from './Address';
import Finish from './Finish';

import { Container, Typography, Stepper, Step, StepLabel } from '@material-ui/core';
import 'fontsource-roboto';

export default function RegistrationForm() {
   
    const [data, setData] = useState({});
    const [step, setStep] = useState(0);
    const [finish, setFinish] = useState(false);
    const steps = [
        <UserInfo onSubmit={storeData} />,
        <PersonalInfo onSubmit={storeData} />,
        <AddressInfo onSubmit={storeData} />,
        <Finish />
    ];

    useEffect(() => {
        onSubmit();
    }, [finish]);

    function changeStep(direction) {
        if (direction === 'next') {
            setStep(step + 1);
        } else if (direction === 'previous') {
            setStep(step - 1);
        }
    }

    function showStep(step) {
        return steps[step];
    }

    function onSubmit() {
        // save data to database and stuff...
        console.log(data);
    }

    function storeData(stepData, nextStep) {
        setData({...data, ...stepData});
        if (nextStep === 'finish') {
            changeStep('next');
            setFinish(true);
        } else {
            changeStep(nextStep);
        }
    }

    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" align="center">
                Registration Form
            </Typography>
            <Stepper activeStep={step}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Personal</StepLabel></Step>
                <Step><StepLabel>Address</StepLabel></Step>
                <Step><StepLabel>Done!</StepLabel></Step>
            </Stepper>
            {
                showStep(step)
            }
        </Container>
    );
}
