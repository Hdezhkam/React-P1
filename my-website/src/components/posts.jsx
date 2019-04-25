import React, { Component } from 'react';
import getPosts from './../services/fakePosts';

class Posts extends Component {
    state = {
        posts : [],
        currentPage: 1,
        pageSize: 5
    }

    componentDidMount() {
        const posts = getPosts();
        this.setState({ posts: posts });
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="card shadow-lg bg-light m-2">
                    <article className="p-3">
                        <div className="card-header">
                            <h3 className="card-title">
                                <a href="#">Test</a>
                            </h3>
                            <span className="card-subtitle">
                                <span className="fa fa-calendar m-2"/>
                                20 Oct
                            </span>
                            <img className="card-img" src="https://via.placeholder.com/700X300" alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Consectetur commodo consequat velit ut laborum eu nulla. Dolor adipisicing elit sit do nulla officia incididunt ipsum dolore cillum nostrud deserunt fugiat enim. Elit Lorem esse quis velit est. In id occaecat id enim nisi et fugiat. Consequat id dolor nulla laborum pariatur non officia id cupidatat irure ea veniam fugiat dolore. Pariatur tempor laboris qui do consequat. Officia quis ut id cupidatat dolor laboris labore.
                            </p>
                        </div>
                        <div className="card-footer">
                            <ul className="list-inline float-left">
                                <li className="list-inline-item">
                                    <span className="fa fa-link m-1"/>
                                    Labels:
                                </li>
                                <li className="list-inline-item"><a href="#">Test</a></li>
                                <li className="list-inline-item"><a href="#">Test</a></li>
                                <li className="list-inline-item"><a href="#">Test</a></li>
                                <li className="list-inline-item"><a href="#">Test</a></li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default Posts;
