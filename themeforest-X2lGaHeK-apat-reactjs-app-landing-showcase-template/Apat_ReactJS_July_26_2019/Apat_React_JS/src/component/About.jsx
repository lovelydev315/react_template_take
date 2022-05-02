import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    constructor(){
        super()
        this.state = {
            title:  'Quickly query and receive credit',
            text:  'Minim volutpat fermentum lorem proin, sociis laudantium tortor iure! Feugiat voluptatem. Earum, quas commodo?',
            text2:  'Aptent quo est cumque ullamco lorem, necessitatibus. Erat et cras numquam mus voluptas, praesent a! Ipsam aliquam aliquip? Ridiculus, scelerisque ultricies, ligula laboris quas, numquam mi facilisi? mattis diam.',
        }
    }
    render(){
        return(
            <section className="about_area" id="about_area">
                <ul className="memphis-parallax hidden-xs hidden-sm white_border">
                    <li data-parallax='{"x": -100, "y": 100}'><img className="br_shape" src={require('../images/line/line_01.png')} alt="f_img" /></li>
                    <li data-parallax='{"x": -200, "y": 200}'><img className="br_shape" src={require('../images/line/line_02.png')} alt="f_img" /></li>
                    <li data-parallax='{"x": -150, "y": 150}'><img className="br_shape" src={require('../images/line/line_03.png')} alt="f_img" /></li>
                    <li data-parallax='{"x": 50, "y": -50}'><img className="br_shape" src={require('../images/line/line_04.png')} alt="f_img" /></li>
                    <li data-parallax='{"x": -150, "y": 150}'><img src={require('../images/line/line_05.png')} alt="f_img" /></li>
                    <li data-parallax='{"x": -100, "y": 100}'><img src={require('../images/line/line_06.png')} alt="f_img" /></li>
                    <li data-parallax='{"x": 50, "y": -50}'><img src={require('../images/line/shape.png')} alt="f_img" /></li>
                    <li data-parallax='{"x": 250, "y": -250}'><img src={require('../images/line/shape-1.png')} alt="f_img" /></li>
                </ul><img className="shape wow fadeInRight" src={require('../images/shape3.png')} alt="f_img" />
                <div className="container">
                    <div className="row row_reverse align_items_center">
                        <div className="col-lg-7">
                            <div className="about_img text-right"><img src={require('../images/app-img.png')} alt="f_img" /></div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about_content">
                                <h2 className="h_color f_36 wow fadeInUp">{this.state.title}</h2>
                                <div className="br"></div>
                                <div className="wow fadeInUp" data-wow-delay="300ms">
                                    <p>{this.state.text}</p>
                                    <p>{this.state.text2}</p>
                                </div>
                                <Link to="/"><span className="n_banner_btn wow fadeInUp" data-wow-delay="450ms"> Discover More </span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default  About;