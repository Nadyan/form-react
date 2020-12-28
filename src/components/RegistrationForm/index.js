import React from 'react';

import PersonalInfo from './Personal';
import UserInfo from './User';

import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

export default function RegistrationForm() {
    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" align="center">
                Registration Form
            </Typography>
            
            <UserInfo />
            <PersonalInfo />
        </Container>
    );
}
