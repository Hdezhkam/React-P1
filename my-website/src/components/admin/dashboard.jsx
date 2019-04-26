import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';
import CreatePost from './creatPost';
import AllPosts from './allPosts';
import CreateCourses from './createCourses';
import AllCourses from './allCourses';




class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <div className="row">
                    <Sidebar />
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <Switch>
                            <Route path="/admin/create-post" component={CreatePost} />
                            <Route path="/admin/allposts" component={AllPosts} />
                            <Route path="/admin/create-course" component={CreateCourses} />
                            <Route path="/admin/allCourses" component={AllCourses} />
                        </Switch>
                    </main>
                </div>
            </div>
        )
    }
}

export default Dashboard;
