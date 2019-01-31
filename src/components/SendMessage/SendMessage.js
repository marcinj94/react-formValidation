import React from 'react';
import './SendMessage.css'

const SendMessage = (props) => {
    return (
        <>
            {props.message && <p className="sendMessage">{props.message}</p>}
        </>
    );
}

export default SendMessage;