import React from 'react'
import ReactDOM from 'react-dom'

// let Welcome = (props) => {
//     return <h1>Hello, {props.name}</h1>;
// }

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }

// const element = <h1>Hello</h1>;

// const element = <Welcome name="Toplearn"/>;

// let App = () => {
//     return (
//         <div>
//             <Welcome name="Jonah"/>
//             <Welcome name="Toplearn"/>
//             <Welcome name="Avengers"/>
//             <Welcome name="Thor"/>
//         </div>
//     )
// }

// let Avatar = (props) => {
//     return (
//         <img className="Avatar"
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//           />
//     );
// }

// let UserInfo = (props) => {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user}/>
//             <div className="UserInfo-name">
//             {props.user.name}
//             </div>
//         </div>
//     );
// }

// function Comment(props) {
//     return (
//       <div className="Comment">
//         <UserInfo user={props.auther}/>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   }

let sum = (a, b) => {
    a = 10;
    return a + b;
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);