import React from 'react';

const Form = () => {
    return (
        <form noValidate>
            <label htmlFor="name">
                Name:
                <input type="text" id="name" />
            </label>
            <label htmlFor="surname">
                Surname:
                <input type="text" id="surname" />
            </label>
            <label htmlFor="email">
                E-mail:
                <input type="email" id="email" />
            </label>
            <label htmlFor="password">
                Password:
                <input type="password" id="password" />
            </label>
            <label htmlFor="accept">
                <input type="checkbox" id="accept" />
                I would like to receive exclusive offers that may be of interest to me.
            </label>
            <button>Register</button>
        </form>
    );
}

export default Form;