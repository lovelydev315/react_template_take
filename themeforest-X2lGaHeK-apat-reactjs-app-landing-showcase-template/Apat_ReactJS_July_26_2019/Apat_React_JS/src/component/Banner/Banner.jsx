import React, { Component } from 'react';
import BannerContent from './BannerContent';
import WOW from "wowjs";


class Banner extends Component {
    componentDidMount() {
    const wow = new WOW.WOW();
        wow.init();
    }
    render() {
        // var {name, topic} = this.props;
        return (
            <section className="n_hero_banner_area" style ={ { backgroundImage: "-moz-linear-gradient( 40deg, #1c46df 0%, #18d8f6 100%),-webkit-linear-gradient( 40deg, #1c46df 0%, #18d8f6 100%), -ms-linear-gradient( 40deg, #1c46df 0%, #18d8f6 100%)" } } id="home">
                <svg id="hero_shape2_normal" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="PSgrad_0" x1="0%" x2="76.604%" y1="64.279%" y2="0%">
                            <stop offset="0%" stopColor="rgba(29,62,222, 0.20)"></stop>
                            <stop offset="100%" stopColor="rgba(3,218,246, 0.20)"></stop>
                        </linearGradient>
                    </defs>
                    <path  fill="rgb(255, 255, 255)" d="M0.000,246.000 C0.000,246.000 326.728,190.237 710.653,123.017 C937.017,83.384 1398.662,3.976 1398.662,3.976 C1398.662,3.976 1524.189,5.641 1668.565,26.591 C1813.299,47.594 1920.000,84.745 1920.000,84.745 L1920.000,323.000 L0.000,323.000 L0.000,246.000 Z"></path>
                    <path fill="url(#PSgrad_0)" d="M0.000,323.249 C0.000,-57.945 0.000,623.445 0.000,242.251 C0.000,242.251 141.533,218.272 347.776,183.613 C479.132,161.538 636.827,133.656 800.746,105.827 C943.681,81.561 1097.680,52.804 1239.269,28.559 C1291.889,19.548 1358.059,5.849 1393.180,1.251 C1434.086,-4.103 1581.001,11.184 1661.097,24.221 C1818.678,49.869 1920.000,84.251 1920.000,84.251 L1920.000,190.407 C1813.062,96.085 1433.376,28.053 1285.064,28.053 L0.000,323.249 Z"></path>
                </svg>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <BannerContent name="Welcome to Apat Get the app now & Enjoy" topic="Why I say old chap that is spiffing cobblers brolly owt to do with me, gormless pukka are you taking the piss bum bag zonked cup of char blower cras numquam mus voluptas.!"/>
                        </div>
                        <div className="col-lg-4 offset-lg-1 col-md-12">
                            <div className="mobile_img wow fadeInUp animated" data-wow-delay="0.2s">
                                <img src={require('../../images/home/PHONE-MOCKUP-1.png')} alt="f_img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape_banners">
                    <img className="img1 wow fadeInRight" data-wow-delay="1.6s" src={ require('../../images/home/3dline.png')} alt="f_img" />
                    <img className="img2 wow fadeInRight" data-wow-delay="1.2s" src={require ('../../images/home/3dline2.png')} alt="f_img" />
                    <img className="img3 wow fadeIn" data-wow-delay="1.5s" src={require('../../images/home/3D.png')} alt="f_img" />
                </div>
            </section>
            );
        }
    }

export default Banner;

                
