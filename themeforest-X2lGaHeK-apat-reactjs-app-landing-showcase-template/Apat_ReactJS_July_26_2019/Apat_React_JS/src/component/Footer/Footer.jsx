import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <footer className="footer-five">
                <div className="footer-top">
                    <div className="container">
                        <div className="row footer_sidebar">
                            <div className="widget footer-widget col-xs-6 col-sm-6 col-md-3 wow fadeIn widget1 about_us_widget"> 
                                <Link to='/'>
                                    <span className="logo">
                                        <img src={require('../../images/logo.png')} alt="AppArt"/>
                                    </span>
                                </Link>
                                <p> Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud. </p>
                            </div>
                            <div className="widget footer-widget col-xs-6 col-sm-6 col-md-3 wow fadeIn widget4 widget_social">
                                <h4 className="widget_title_two">Social Link</h4>
                                <ul className="social-icon">
                                    <li><a href="."><i className="fa fa-facebook"></i>Facebook</a></li>
                                    <li><a href="."><i className="fa fa-instagram"></i> Instagram </a></li>
                                    <li><a href="."><i className="fa fa-linkedin"></i> Linkedin </a></li>
                                    <li><a href="."><i className="fa fa-pinterest"></i> Pinterest </a></li> 
                                </ul>
                            </div>
                            <div className="widget footer-widget col-xs-6 col-sm-6 col-md-3 wow fadeIn widget_nav_menu" data-wow-delay="0ms" data-wow-duration="1500ms" data-wow-offset="0">
                                <h4 className="widget_title_two">Quick Links</h4>
                                <div className="menu-quick-links-container">
                                    <ul id="menu-quick-links" className="menu">
                                        <li id="menu-item-844" className="menu-item"><a href=".">About</a></li>
                                        <li id="menu-item-845" className="menu-item"><a href=".">Social Info</a></li>
                                        <li id="menu-item-846" className="menu-item"><a href=".">Subscribe</a></li>
                                        <li id="menu-item-847" className="menu-item"><a href=".">Tags</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget footer-widget col-xs-6 col-sm-6 col-md-3 wow fadeIn widget2 widget_contact">
                                <h4 className="widget_title_two">Contact Info</h4>
                                <div className="widget_inner row m0">
                                    <ul>
                                        <li><i className="ti-location-pin"></i>
                                            <div className="location_address fleft">25 Bedford St. New York City, N.Y. United States Of America </div>
                                        </li>
                                        <li><i className="ti-mobile"></i>
                                            <div className="fleft contact_no">+88-017812-37134 </div>
                                        </li>
                                        <li><i className="ti-email"></i>
                                            <div className="fleft contact_mail"><a href="mailto:contact@website.com"> contact@website.com </a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m0 footer_bottom text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <p>2019 <a href=".">DroitThemes</a>. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;