import React from 'react';

import { Container, Typography } from '@material-ui/core';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import 'fontsource-roboto';

export default function Finish() {
    return (
        <Container align="center">
            <Typography variant="h4">
                Form sent successfully!
            </Typography>
            <DoneOutlineIcon />
        </Container>
    );
}