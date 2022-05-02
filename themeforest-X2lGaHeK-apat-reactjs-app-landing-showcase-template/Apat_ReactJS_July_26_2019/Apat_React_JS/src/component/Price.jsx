import React, { Component } from 'react';
import Title from './Title';
import PriceItem from './PriceItem';

class Price extends Component {
    constructor(){
        super();
        this.state = {
            posts:[
                {
                    "id": 100,
                    "ptitle": "Standard",
                    "info": "Most popular choice",
                    "rate": "$49.00",
                    'list1': '07 Domain Names',
                    'list2': '10GB Disk Space',
                    'list3': 'Powerful Admin Panel',
                    'list4': '24/7 E-mail support',
                },
                {
                    "id": 101,
                    "ptitle": "Standard",
                    "info": "Most popular choice",
                    "rate": "$29.00",
                    'list1': '07 Domain Names',
                    'list2': '10GB Disk Space',
                    'list3': 'Powerful Admin Panel',
                    'list4': '24/7 E-mail support',
                },
                {
                    "id": 102,
                    "ptitle": "Business",
                    "info": "For the whole team",
                    "rate": "$99.00",
                    'list1': '25 Domain Names',
                    'list2': '110GB Disk Space',
                    'list3': 'Powerful Admin Panel',
                    'list4': '24/7 E-mail support',
                }
            ]
        };
    }
    render() {
        return (
            <section className="priceing_area_two" id="pricing">
                <div className="container">
                    <Title Stitle="Pricing table" pfont="Cumque adipisci anim quisque provident posuere blandit accumsan delectus quam quos interdum sociosqu."/>
                    <div className="row">
                        {this.state.posts.map(post =>(
                          <PriceItem key={post.id} post ={post} image="price-icon1.png"/>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Price;