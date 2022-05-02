import React, { Component } from 'react';
import Title from '../Title'

class Testimonial extends Component {
    render() {
        return (
            <section className="testimonial_area_two">
                <div className="container">
                    <Title Stitle="Loved by our customers " pfont="Cumque adipisci anim quisque provident posuere blandit accumsan delectus quam quos interdum sociosqu."/> 
                    <div id="carouselExampleIndicators" className="carousel slide testimonial_info" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item ">
                                <div className="carousel_text"><img src={require('../../images/line/quote2.png')} alt="f_img"/>
                                    <p>Why I say old chap that is spiffing brown bread hotpot cheeky bugger, amongst tomfoolery only a quid are you taking the piss spiffing good time butty the bee's knees codswallop me old mucker, knackered wellies cup of tea bender!</p>
                                </div>
                            </div>
                            <div className="carousel-item active">
                                <div className="carousel_text"><img src={require('../../images/line/quote2.png')} alt="f_img"/>
                                    <p>Why I say old chap that is spiffing brown bread hotpot cheeky bugger, amongst tomfoolery only a quid are you taking the piss spiffing good time butty the bee's knees codswallop me old mucker, knackered wellies cup of tea bender!</p>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="carousel_text"><img src={require('../../images/line/quote2.png')} alt="f_img"/>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui vel tristique purus justo vestibulum eget lectus non gravida ultrices</p>
                                </div>
                            </div>
                        </div>
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="">
                                <div className="slider_thumbs"><img src={require('../../images/test/tes2.png')} alt="Steven "/>
                                    <div className="thumbs_text">
                                        <h2>Steven </h2>
                                        <p>Programmer</p>
                                    </div>
                                </div>
                            </li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active">
                                <div className="slider_thumbs"><img src={require('../../images/test/tes1.png')}  alt="Lurch Schpell"/>
                                    <div className="thumbs_text">
                                        <h2>Lurch Schpell</h2>
                                        <p>web designer</p>
                                    </div>
                                </div>
                            </li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2" className="">
                                <div className="slider_thumbs"><img src={require('../../images/test/tes3.png')}  alt="Becroft"/>
                                    <div className="thumbs_text">
                                        <h2>Becroft</h2>
                                        <p>web designer</p>
                                    </div>
                                </div>
                            </li>
                        </ol>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><i className="ti-arrow-left"></i></a><a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><i className="ti-arrow-right"></i></a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonial;