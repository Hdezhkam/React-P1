import React from 'react';
import { render } from 'react-dom';

const rootNode = document.getElementById('root');
// const numbers = [1,2,3,4];
// const doubled = numbers.map((number) => number * 2);

// const numbers = [1,2,3,4];
// const listItems = numbers.map((number) => <li>{number}</li>);

//     <li key={todo.id}>
//         {todo.text}
//     </li>
// })

// const todoItems = todos.map((todo, index) => {
//     <li key={index}>
//         {todo.text}
//     </li>
// })

// let NumberList = (props) => {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);

//     return (
//         <ul>{listItems}</ul>
//     );
// }

// const numbers = [1,2,3,4];

// const ListItems = (props) => {
//     return (
//         <li>
//             {props.value}
//         </li>
//     );
// }

// const NumberList = (props) => {
//     const numbers = props.value;
//     const listItems = numbers.map((number) => <ListItems key={number.toString()} value={number}/>);

//     return (
//         <ul>
//             {listItems}
//         </ul>
//     );
// }

// const numbers = [1,2,3,4];

let Blog = (props) => {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    // const content = posts.map((post) => 
    //     <Post 
    //         key={post.id}
    //         id={post.id}
    //         title={post.title}
    //     />
    // );

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to toplearn' },
    { id: 2, title: 'Jonah', content: 'Learning reactjs' }
];


// let NumberList = (props) => {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);

//     return (
//         <ul>{listItems}</ul>
//     );
// }

// let NumberList = (props) => {
//     const number = props.numbers;
//     return (
//         <ul>
//             {
//                 numbers.map((number) => 
//                     <ListItem key={number.toString()} value={number}/>
//                 )
//             }
//         </ul>
//     )
// }


render(
    <Blog posts={posts} />,
    rootNode
);