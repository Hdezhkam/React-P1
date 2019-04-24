import React from 'react';
import { render } from 'react-dom';

const Info = ({ name }) => {
    return (
        <div style={{ direction: 'rtl', textAlign: 'center' }}>
            <h1>Information</h1>
            <p>User Name: {name}</p>
        </div>
    );
}

const authInfo = (Comp) => {
    return (props) => (
        <div>
            {props.isLoggedIn ? (
                <Comp {...props} />
            ) : (
                    <p>Please Login</p>
                )}
        </div>
    );
}

const Authenticated = authInfo(Info);

render(
    <Authenticated isLoggedIn={true} name="Hamid Dezhkam" />,
    document.getElementById('root')
);