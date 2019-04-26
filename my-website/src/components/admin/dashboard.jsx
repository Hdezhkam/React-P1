import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';



class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <div className="row">
                    <Sidebar />
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        {/*<Switch>
                            <Route path="/education" component={Education} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/courses" component={Courses} />
                             {/*<Redirect from="/skills" to="/not-found" />        
                            <Route path="/skills" component={Skills} />
                            <Route path="/" exact component={Posts} />
                            <Redirect to="/not-found" />
                        </Switch>*/}
                    </main>
                </div>
            </div>
        )
    }
}

export default Dashboard;
