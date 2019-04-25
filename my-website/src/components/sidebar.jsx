import React, { Component } from 'react';
import getNavLinks from '../services/navLinks';

class Sidebar extends Component {
    render() {
        const navLinks = getNavLinks();
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <div className="text-center">
                        <img src="https://via.placeholder.com/200x200" className="img-thumbnail img-fluid" alt="" />
                        <span className="card bg-info shadow user-fullname">
                            Hamid Dezhkam
                        </span>
                        <p>Front End Web Developer</p>
                    </div>
                    <hr className="shadow"/>
                    <ul className="nav flex-column">
                        {navLinks.map(nav => (
                          <li className="nav-item" key={nav.id}>
                            <a className="nav-link" href="{nav.link}">
                                <span className={nav.icon}/>
                                <span className="m-2">{nav.text}</span>
                                {nav.count ? (
                                    <span className="badge-danger badge-pill">
                                        {nav.count}
                                    </span>
                                ) : null}
                            </a>
                          </li>
                            
                        ))}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;