import React, { Component } from 'react';
import Title from './Title';
import FeaturesItems from './FeaturesItems';

class Features extends Component {
    render() {
        return (
            <section className="best_screen_features_area features_area_pad" id="features">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <path fill="#fff" id="down_bg_copy_2" data-name="down / bg copy 2" className="cls-1" d="M444.936,252.606c-148.312,0-305.161-29.63-444.936-80.214V0H1920V12S808.194,234.074,444.936,252.606Z" />
                </svg>
                <ul className="memphis-parallax hidden-xs hidden-sm white_border">
                    <li data-parallax='{"x": -00, "y": 100}'><img className="br_shape" src={require('../images/line/f_l_01.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": 200, "y": 200}'><img className="br_shape" src={require('../images/line/f_l_02.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": 150, "y": 150}'><img className="br_shape" src={require('../images/line/f_l_03.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": 50, "y": 50}'><img className="br_shape" src={require('../images/line/f_l_05.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": 150, "y": 150}'><img src={require('../images/line/f_l_06.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": 100, "y": 100}'><img src={require('../images/line/f_l_07.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": 50, "y": 50}'><img src={require('../images/line/f_l_08.png')} alt="f_img"/></li>
                    <li data-parallax='{"y": 250}'><img src={require('../images/line/f_l_09.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": 250, "y": 250}'><img src={require('../images/line/f_l_10.png')} alt="f_img"/></li>
                    <li data-parallax='{"x": 150, "y": 150}'><img className="br_shape" src={require('../images/line/f_l_04.png')} alt="f_img"/></li>
                </ul>
                <div className="container">
                    <Title Stitle="Some of the best features" pfont="Cumque adipisci anim quisque provident posuere blandit accumsan delectus quam quos interdum sociosqu."/>
                    <div className="row ">
                        <div className="col-lg-4">
                            <div className="b_screen_img wow fadeInUp"><img src={require('../images/mobile_mockup_2.png')} alt="featured" className="img-fluid"/></div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row b_features_info">
                                <FeaturesItems ftitle="Awesome Design" text="In pariatur conubia exercitationem Cillum, rhoncus! Aspernatur hendrerit! Morbi pariatur tempora platea volutpat?" name="image"/>
                                <FeaturesItems ftitle="Easy Customize" text="In pariatur conubia exercitationem Cillum, rhoncus! Aspernatur hendrerit! Morbi pariatur tempora platea volutpat?" name="pencil-alt"/>
                                <FeaturesItems ftitle="Extreme Security" text="In pariatur conubia exercitationem Cillum, rhoncus! Aspernatur hendrerit! Morbi pariatur tempora platea volutpat?" name="key"/>
                                <FeaturesItems ftitle="Built in Browsers" text="In pariatur conubia exercitationem Cillum, rhoncus! Aspernatur hendrerit! Morbi pariatur tempora platea volutpat?" name="desktop"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;