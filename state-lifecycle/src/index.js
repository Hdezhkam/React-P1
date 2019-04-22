import React from 'react';
import ReactDOM from 'react-dom';

//let tick = () => {
// const element = (
//         <div>
//              <h1>Toplearn</h1>
//              <h2>It is {new Date().toLocaleTimeString()}</h2>
//          </div>
//   )
//            ReactDOM.render(
//               element,
//               document.getElementById('root')
//            )       
//  
//}

// setInterval (tick, 1000)

//let Clock = (props) => {
//  return(
//   <div>
//      <h1>Hello World!</h1>
//     <h2>It is {props.date.toLocaleTimeString()}.</h2>
//  </div>
//   )
//}

//let tick = () => {
//    ReactDOM.render(
//     <Clock date={new Date()} />,
//       document.getElementById('root')
//      )

//}



class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.state = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)



