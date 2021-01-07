import React, { useState } from 'react';

import handleValidate from '../components/RegistrationForm/validate';

export default function useErrors() {

    const [error, setError] = useState(
        {
            socialId: {
                valid: true,
                text: ""
            },
            firstName: {
                valid: true,
                text: ""
            },
            lastName: {
                valid: true,
                text: ""
            }
        }
    );

    function callHandleValidate(event) {
        const { name, value } = event.target;
        const newState = {...error};
        newState[name] = handleValidate(value, name);
        setError(newState);
    }

    return [error, callHandleValidate];

}
