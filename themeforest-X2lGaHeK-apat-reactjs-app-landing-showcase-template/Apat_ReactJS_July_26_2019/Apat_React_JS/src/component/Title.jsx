import React, { Component } from 'react';

class Title extends Component {
    render() {
        var {Stitle, pfont} = this.props;
        return (
            <div className="title-four h_color text-center">
                <h2 className="wow fadeInUp">{Stitle}</h2>
                <p className="p_color wow fadeInUp" data-wow-delay="200ms">{pfont}</p>
            </div>
        );
    }
}

export default Title;