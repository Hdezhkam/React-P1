import React from "react";
import ReactDOM from "react-dom";

//const element = <h1>Hello World!</h1>;

//console.log(element);

//let formatName = (user) => {
 //   return `${user.firstName} ${user.lastName}`;
//}

let greeting = (user) => {
    if (user){
        return <h1>Hello, {user.firstName}</h1>
    }
    return <h1>Hello, Toplearn</h1>
} 

let user = {
    firstName: 'Hamid',
    lastName: 'Dezhkam'
}

            let element = (
                <h1>
                    {greeting(user)}
                </h1>
            );


//let fullName = 'Hamid Dezhkam';
//let element = <h1>Hello,  {fullName}</h1>

ReactDOM.render (
    element, 
    document.getElementById("root")
    );

  