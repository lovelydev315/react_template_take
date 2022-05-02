import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class BannerContent extends Component {
    render(){
        var { name, topic} = this.props;
        return(
            <React.Fragment>
                <div className="n_banner_content">
                    <h2 className="wow fadeInUp" data-wow-delay="300ms">{name}</h2>
                    <p className="wow fadeInUp" data-wow-delay="500ms">{topic}</p>
                    <Link to="/"><span className="n_banner_btn wow fadeInUp" data-wow-delay="600ms">See How We Do it</span></Link>
                </div>
            </React.Fragment>
            
        );
    }
}

export default BannerContent;