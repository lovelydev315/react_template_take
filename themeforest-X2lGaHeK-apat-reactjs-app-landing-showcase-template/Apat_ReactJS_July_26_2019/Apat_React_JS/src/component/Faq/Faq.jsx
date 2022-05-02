import React, { Component } from 'react';
import Title from '../Title';
import $ from 'jquery';

class Faq extends Component {
    componentDidMount(){
        $(".faq_accordian_two .card").click(function(){
            $(".faq_accordian_two .card").removeClass("active");
            $(this).addClass('active');
        });
    }
    render() {
        return (
            <section className="faq_solution_area features_area_pad" id="faq">
                <ul className="memphis-parallax hidden-xs hidden-sm white_border">
                    <li data-parallax='{"x": -100, "y": 100}'><img className="br_shape" src={require ('../../images/line/fq_line-1.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": -200, "y": 200}'><img className="br_shape" src={require('../../images/line/fq_line-2.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": -150, "y": 150}'><img className="br_shape" src={require('../../images/line/fq_line-3.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": 50, "y": -50}'><img className="br_shape" src={require('../../images/line/fq_line-4.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": -150, "y": 150}'><img src={require('../../images/line/fq_line-5.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": -100, "y": 100}'><img src={require('../../images/line/fq_line-6.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": 50, "y": -50}'><img src={require('../../images/line/fq_line-7.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": 250, "y": -250}'><img src={require('../../images/line/fq_line-8.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": 150, "y": -150}'><img src={require('../../images/line/fq_line-9.png')} alt="f_img"/></li>
                    <li data-parallax='{"y": -180}'><img src={require('../../images/line/fq_line-10.png')} alt="f_img"/></li>
                </ul>
                <div className="container">
                    <Title Stitle="Data Analytics" pfont="Cumque adipisci anim quisque provident posuere blandit accumsan delectus quam quos interdum sociosqu."/>
                    <div className="row ">
                        <div className="col-md-6 d_flex">
                            <div id="accordion" className="faq_accordian_two">
                                <div className="card wow fadeInUp active">
                                    <div className="card-header" id="heading1">
                                        <h5 className="mb-0"><button className="btn btn-link" data-toggle="collapse" data-target="#collapse0" aria-expanded="true" aria-controls="collapse0"><i className='ti-location-arrow'></i>Message send available? </button></h5>
                                    </div>
                                    <div id="collapse0" className="collapse show" aria-labelledby="heading1" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Non sit hymenaeos error laoreet mollit architecto natoque aenean et, cum nemo, nesciunt animi laoreet phasellus ea laboriosam aenean nihil fringilla reprehenderit similique.!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInUp ">
                                    <div className="card-header" id="heading2">
                                        <h5 className="mb-0"><button className="btn btn-link" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1"><i className='ti-support'></i>Is there 24/7 customer support? </button></h5>
                                    </div>
                                    <div id="collapse1" className="collapse " aria-labelledby="heading2" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Non sit hymenaeos error laoreet mollit architecto natoque aenean et, cum nemo, nesciunt animi laoreet phasellus ea laboriosam aenean nihil fringilla reprehenderit similique.!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInUp ">
                                    <div className="card-header" id="heading3">
                                        <h5 className="mb-0"><button className="btn btn-link" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2"><i className='ti-stats-up'></i>This is a simple question? </button></h5>
                                    </div>
                                    <div id="collapse2" className="collapse " aria-labelledby="heading3" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Hollywood hype would have us believe that a hypnotist can control and direct our actions, and </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInUp ">
                                    <div className="card-header" id="heading4">
                                        <h5 className="mb-0"><button className="btn btn-link" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3"><i className='ti-harddrive'></i>Ultimate interface? </button></h5>
                                    </div>
                                    <div id="collapse3" className="collapse " aria-labelledby="heading4" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Hollywood hype would have us believe that a hypnotist can control and direct our actions, and </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="faq_image_mockup wow fadeInUp" data-wow-delay="200ms"><img src={require('../../images/mobile_mockup_3.png')} alt="featured"/></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Faq;