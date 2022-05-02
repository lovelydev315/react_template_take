import React, { Component } from 'react';

class Action extends Component {
    render() {
        let imgUrl = require('../images/get_bg.jpg')
        const divStyle = {
            background: 'linear-gradient(0deg, rgba(76,132,255,0.88), rgba(76,132,255,0.88)), url(' + imgUrl + ') no-repeat',
        }
        return (
            <section className="new_call_action_area" style={divStyle} id="download">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                            <div className="action_mobile wow fadeInUp"><img src={require('../images/mobile_mockup_4.png')} alt="f_img"/></div>
                        </div>
                        <div className="col-lg-8 d_flex col-md-7 col-sm-12 col-xs-12">
                            <div className="n_call_action_content">
                                <h2 className="wow fadeInUp"> Get The App Now! </h2>
                                <div className="wow fadeInUp" data-wow-delay="300ms">
                                    <p>Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual</p>
                                </div>
                                <a href="." className="btn btn-normal apps-button wow fadeInUp" data-wow-delay="450ms"><i className="fa fa-apple"></i> <span>Download on The</span><br/> App Store </a>
                                <a href="." className="btn btn-normal apps-button wow fadeInUp" data-wow-delay="450ms"><i className="fa fa-android"></i> <span>Get it on</span><br/> Google Play </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Action;