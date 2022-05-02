import React, { Component } from 'react';

class AppStore extends Component {
    render() {
        return (
            <section className="app-deatails-area">
                <div className="container">
                    <div className="title-four text-center no_bottom_line">
                        <h2 className="wow fadeInUp"> Find Our App On </h2>
                        <div className="wow fadeInUp" data-wow-delay="300ms">
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed consequuntur magni dolores ratione voluptatem </p>
                        </div>
                    </div>
                    <div className="app_info">
                        <div className="row m0">
                            <div className="col-md-6 col-sm-12 p0">
                                <div className="app-details wow fadeInUp">
                                    <div className="app-icon"><img src={require('../images/a.png')} alt=""/></div>
                                    <div className="app-title">
                                        <h5> App store feedback </h5>
                                        <div className="user-info">
                                            <div className="star-rating"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star-half-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i> </div><span> 824 Ratings </span>
                                        </div>
                                    </div>
                                    <div className="table-responsive customer_table">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>Category:</td>
                                                    <td>Health & Fitness</td>
                                                </tr>
                                                <tr>
                                                    <td>Updated:</td>
                                                    <td>Oct 19, 2017</td>
                                                </tr>
                                                <tr>
                                                    <td>Version:</td>
                                                    <td>5.5.1</td>
                                                </tr>
                                                <tr>
                                                    <td>Size:</td>
                                                    <td>65.2 MB</td>
                                                </tr>
                                                <tr>
                                                    <td>Language:</td>
                                                    <td>English</td>
                                                </tr>
                                                <tr>
                                                    <td>Seller: </td>
                                                    <td>Skyfit Sports Inc.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 p0">
                                <div className="app-details wow fadeInUp">
                                    <div className="app-icon"><img src={require('../images/p.png')} alt=""/></div>
                                    <div className="app-title">
                                        <h5> Google play feedback </h5>
                                        <div className="user-info">
                                            <div className="star-rating"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star-half-o" aria-hidden="true"></i> </div><span> 824 Ratings </span>
                                        </div>
                                    </div>
                                    <div className="table-responsive customer_table">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>Category:</td>
                                                    <td>Health & Fitness</td>
                                                </tr>
                                                <tr>
                                                    <td>Updated:</td>
                                                    <td>Oct 19, 2017</td>
                                                </tr>
                                                <tr>
                                                    <td>Version:</td>
                                                    <td>5.5.1</td>
                                                </tr>
                                                <tr>
                                                    <td>Size:</td>
                                                    <td>65.2 MB</td>
                                                </tr>
                                                <tr>
                                                    <td>Language:</td>
                                                    <td>English</td>
                                                </tr>
                                                <tr>
                                                    <td>Seller: </td>
                                                    <td>Skyfit Sports Inc.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AppStore;