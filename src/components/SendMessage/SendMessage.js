import React from 'react';

const SendMessage = (props) => {
    return (
        <>
            {props.message && <p className="sendMessage">{props.message}</p>}
        </>
    );
}

export default SendMessage;