import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PriceItem extends Component {
    
    render() {
        var {image} = this.props;
        return (
            <div className="col-md-4 col-sm-6">
                <div className="price_box_two text-center wow fadeInLeft" data-wow-delay="250ms">
                    <h5>{this.props.post.ptitle}</h5>
                    <p>{this.props.post.info}</p>
                    <div className="price_icon"><img src={require ("../images/" + image)} alt="" /></div>
                    <h2 className="rate">{this.props.post.rate}</h2>
                    <ul className="list-unstyled plan-lists posts">
                        {/* {this.state.data.map(post => <li key={post.id}>{post.list}</li>)} */}
                        <li>{this.props.post.list1}</li>
                        <li>{this.props.post.list2}</li>
                        <li>{this.props.post.list3}</li>
                        <li>{this.props.post.list4}</li>
                    </ul>
                    <Link to="/"><span className="purchase_btn_two">Purchase </span></Link>
                </div>
            </div>
        );
    }
}

export default PriceItem;