import React, { Component } from 'react';

class FeaturesItems extends Component {
    render() {
        let {ftitle, text, name} = this.props;
        return (
            <div className="col-sm-6">
                <div className="b_features_item wow fadeInUp">
                    <div className="b_features_icon">
                        <div className="icon">
                            <i className={`ti-${name}`}></i>
                            <span className="hover_color"></span>
                        </div>
                    </div><a href=".">
                        <h3>{ftitle}</h3>
                    </a>
                    <p>{text}</p>
                </div>
            </div>
        );
    }
}

export default FeaturesItems;