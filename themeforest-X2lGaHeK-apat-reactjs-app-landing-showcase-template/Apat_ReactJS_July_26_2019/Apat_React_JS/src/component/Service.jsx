/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';

class ServiceList extends Component{

    render(){
        return(
            <div className="col-lg-4 col-md-6">
                <div className="seo_service_item">
                    <img src={this.props.post.image} alt="" />
                    <a href="#">
                        <h4>{this.props.post.title}</h4>
                    </a>
                    <p>{this.props.post.text}</p>
                    <a href="#"><i className="arrow_right"></i></a>
                </div>
            </div>
        )
    }
}

export default ServiceList;
