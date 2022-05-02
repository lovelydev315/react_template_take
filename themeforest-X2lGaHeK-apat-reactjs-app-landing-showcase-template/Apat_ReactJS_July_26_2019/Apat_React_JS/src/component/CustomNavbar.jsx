import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CustomNavbar extends Component {
    render() {
        return (
            <nav id="fixed-top" className="navbar navbar-toggleable-sm transparent-nav navbar-expand-lg">
                <div className="container"><Link to="/"><span className="navbar-brand"><img src={require('../images/logo.png')} alt="logo" /><img src={require('../images/logo-dk.png')} alt="logo" /></span></Link><button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown submenu"><a className="nav-link dropdown-toggle active" href="#home" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                                <ul className="dropdown-menu sub-menu">
                                    <li><a href="home.html">Home 01</a></li>
                                    <li><a href="home-2.html">Home 02</a></li>
                                    <li><a href="index.html">Home 03</a></li>
                                    <li><a href="index3.html">Home 04</a></li>
                                    <li><a href="index5.html">Home 05</a></li>
                                    <li><a href="index6.html">Home 06</a></li>
                                    <li><a href="index7.html">Home 07</a></li>
                                    <li><a href="index8.html">Home 08</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                            <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
                            <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
                            <li className="nav-item"><a className="nav-link" href="#download">Download</a></li>
                        </ul>
                        <a href="./" className="get-btn">Get Started</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default CustomNavbar;