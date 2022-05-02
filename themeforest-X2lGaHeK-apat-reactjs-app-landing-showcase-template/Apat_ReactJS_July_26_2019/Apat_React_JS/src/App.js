import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import CustomNavbar from './component/CustomNavbar';
import Banner from './component/Banner/Banner';
import About from './component/About';
import Features from './component/Features';
import Faq from './component/Faq/Faq';
import Price from './component/Price';
import Action from './component/Action';
import AppStore from './component/AppStore';
import Testimonial from './component/Testimonial/Testimonial';
import Footer from './component/Footer/Footer';
import $ from 'jquery';

import WOW from 'wowjs';

class App extends Component {
    componentDidMount(){
      if (typeof window !== 'undefined') {
        const wow = new WOW.WOW({
          live: false,
        })
        wow.init()
      }
        var head = $(".navbar");
        var stick = "shrink";

        $(window).scroll(function() {
            $(window).scrollTop() > 0
                ? head.addClass(stick)
                : head.removeClass(stick)
        })

        $('.navbar li a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top-75
            }, 1500);
            event.preventDefault();
        });
    }
  render() {
    return (
      <Router>
        <div className="App">
            <div className="body_wrapper">
                <CustomNavbar/>
                <Banner/>
                <About/>
                <Features/>
                <Faq/>
                <Price/>
                <Action/>
                <AppStore/>
                <Testimonial/>
                <Footer/>
            </div>
        </div>
      </Router>
    )
  }
}

export default App;
