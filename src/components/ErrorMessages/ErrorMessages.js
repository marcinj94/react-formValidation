import React from 'react';
import './ErrorMessages.css'

const ErrorMessages = (props) => {

    const { username, surname, email, password, accept } = props.errors;

    const { wrongUsername, wrongSurname, wrongEmail, wrongPassword, wrongAccept } = props.errorMessages;

    const value = (username || surname || email || password || accept) ?
        <div className="errorMessages">
            <h2 className="errorMessages__title">Something went wrong!</h2>
            {username && <span>{wrongUsername}</span>}
            {surname && <span>{wrongSurname}</span>}
            {email && <span>{wrongEmail}</span>}
            {password && <span>{wrongPassword}</span>}
            {accept && <span>{wrongAccept}</span>}
        </div> : null;

    return (
        <>
            {value}
        </>
    );
}

export default ErrorMessages;