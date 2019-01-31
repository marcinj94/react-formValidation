import React from 'react';
import './Form.css'

const Form = (props) => {

    const { username, surname, email, password, accept } = props.state;

    return (
        <form noValidate onSubmit={props.submit}>
            <label htmlFor="name">
                Name:
                <input type="text" name="username" placeholder="Your name" id="name" onChange={props.change} value={username} />
            </label>
            <label htmlFor="surname">
                Surname:
                <input type="text" name="surname" placeholder="Your surname" id="surname" onChange={props.change} value={surname} />
            </label>
            <label htmlFor="email">
                E-mail:
                <input type="email" name="email" placeholder="Your e-mail address" id="email" onChange={props.change} value={email} />
            </label>
            <label htmlFor="password">
                Password:
                <input type="password" name="password" placeholder="Your password" id="password" onChange={props.change} value={password} />
            </label>
            <label htmlFor="accept">
                <input type="checkbox" name="accept" id="accept" onChange={props.change} checked={accept} />
                I would like to receive exclusive offers that may be of interest to me.
            </label>
            <button className="btn">Register</button>
        </form>
    );
}

export default Form;