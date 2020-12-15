import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';

export default function RegistrationForm() {

    // aahooooy!

    return (
        <Fragment>
            <h1>Registration Form</h1>
            <form>
                <label>First name</label>
                <input type="text"></input>

                <label>Last name</label>
                <input type="text"></input>

                <label>Social ID</label>
                <input type="text"></input>

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
