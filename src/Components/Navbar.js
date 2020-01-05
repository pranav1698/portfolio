import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.navbarData = props.landingData;
    }

    render(){
        return (
            <header>
                <nav id="navbar" ref="navbar" className="navbar navbar-light shadow-sm">
                    <div className="container navbar-container">
                        <a className="navbar-brand bg-white" href="/#">
                            Pranav
                        </a>
                        <div className="nav-links">
                            <ul className="list-inline">
                                <li className="list-inline-item mt-3">
                                    <a href="https://pranav1698.github.io/portfolio/">Home</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://pranav1698.github.io/portfolio/#about">About</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://pranav1698.github.io/portfolio/#project">Projects</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://pranav1698.github.io/portfolio/#skills">Skills</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://pranav1698.github.io/portfolio/#contact">Contact</a>
                                </li>
                            </ul>
                        </div>                    
                    </div>
                </nav>
            </header>
            
        );       
    }  
}

export default Navbar;