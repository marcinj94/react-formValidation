import React from 'react';

const Form = (props) => {

    const { username, surname, email, password, accept } = props.state;
    console.log(username);

    return (
        <form noValidate>
            <label htmlFor="name">
                Name:
                <input type="text" name="username" id="name" onChange={props.change} value={username} />
            </label>
            <label htmlFor="surname">
                Surname:
                <input type="text" name="surname" id="surname" onChange={props.change} value={surname} />
            </label>
            <label htmlFor="email">
                E-mail:
                <input type="email" name="email" id="email" onChange={props.change} value={email} />
            </label>
            <label htmlFor="password">
                Password:
                <input type="password" name="password" id="password" onChange={props.change} value={password} />
            </label>
            <label htmlFor="accept">
                <input type="checkbox" name="accept" id="accept" onChange={props.change} checked={accept} />
                I would like to receive exclusive offers that may be of interest to me.
            </label>
            <button>Register</button>
        </form>
    );
}

export default Form;