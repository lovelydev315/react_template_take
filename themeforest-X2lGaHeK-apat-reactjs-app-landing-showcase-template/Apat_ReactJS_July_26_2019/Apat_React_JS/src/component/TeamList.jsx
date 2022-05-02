import React, {Component} from 'react';

class TeamList extends Component{
    render(){
        var { name, image, topic} = this.props;
        return(
            <div className="col-lg-4 col-md-6">
                <div className="seo_service_item">
                    <img src={require ("../img/seo/" +image)} alt="" />
                    <h4>{name}</h4>
                    <p>{topic}</p>
                    {/* <a href="#"><i className="arrow_right"></i></a> */}
                </div>
            </div>
        )
    }
}

export default TeamList;