import React from 'react';
import ReactDOM from 'react-dom' ;

// let UserGreeting = (props) => {
//     return <h1>Welcome Back!</h1>
// }

// let GuestGreeting = (props) => {
//     return <h1>Please Login</h1>
// }

// let Greeting = (props) => {
//     const isLoggedIn = props.isLoggedIn
//     if (isLoggedIn) {
//         return <UserGreeting/>;
//     }
//     return <GuestGreeting/>;
// }

let LoginButton = (props) =>{
    // if (!props.warn){
    //     return null;
    // }
    return(
        <button onClick={props.onClick}>LogIn</button>
    )
}

let LogoutButton = (props) =>{
    return(
        <button onClick={props.onClick}>LogOut</button>
    )
}

class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false};
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }
    render( ){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
            if (isLoggedIn){
                button = <LogoutButton onClick={this.handleLogoutClick}/>;
            }else{
                button = <LoginButton onClick={this.handleLoginClick}/>;
            }
  

        return (
            <div>
                {button}
                
            </div>
        )
    }
}

ReactDOM.render (
    <LoginControl/>,
    document.getElementById('root')
);

// ReactDOM.render( 
//     <Greeting isLoggedIn={true}/>,
//     document.getElementById('root')
// );

