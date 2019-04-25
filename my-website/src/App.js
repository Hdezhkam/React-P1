import React, { Component } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';



class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App;
