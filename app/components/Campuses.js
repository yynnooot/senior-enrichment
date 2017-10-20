import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Campuses extends Component {
    constructor(){
        super();
        this.state = {
            campuses : []
        }
    }

    componentDidMount(){
        axios.get('/api/campuses')
            .then(res => res.data)
            .then(campuses => this.setState({campuses: campuses}))
    }
    //onsubmit
    render(){
        return (
            <div id="main-container">
                <h1>Welcome to the Margaret Hamilton Interplanetary Academy of JavaScript</h1>
                <h3>Our Campuses</h3>
                <div id="campus-container">
                    {
                        this.state.campuses.map(campus=>{

                            var sectionStyle = {
                                backgroundImage: "url(" + campus.image + ")",
                                backgroundSize: "contain",
                                backgroundColor: "rgba(248, 247, 216, 0.7)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100%"
                            };

                            return (
                                <div key={campus.id} className="campus-div" style={sectionStyle}>
                                    <Link to={`/campuses/${campus.id}`} >
                                        <div className="campus-name-div">
                                            {campus.name}
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div id="campus-btn-div">
                    <button id="campus-btn"><Link to={`/addcampus/`}>Add Campus</Link></button>
                </div>
            </div>
        )
    }
}