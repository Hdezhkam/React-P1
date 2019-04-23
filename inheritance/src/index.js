import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

let Borderi = (props) => {
    return (
        <div className={'borderi-' + props.color}>
            {props.children}
        </div>
    )
}

// let WelcomeDialog = () => {
//     return(
//         <Borderi color="blue">
//             <h1 className="Dialog-title">
//                 خوش آمدید
//             </h1>
//             <p className="Dialog-message">
//                 متشکریم از این که به وبسایت ما سر زدید.
//             </p>
//         </Borderi>
//     )
// }

let Dialog = (props) => {
    return (
        <Borderi color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </Borderi>
    )
}

let WelcomeDialog = () => {
    return (
        <Dialog title="Welcome" message="Thank You" />
        // <SplitPane left={<Contacts />} right={<Chat />} />

    )
}


render(
    <WelcomeDialog />,
    document.getElementById('root')
)