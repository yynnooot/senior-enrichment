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
        console.log('***asdf**',this.state.campuses)
        return (
            <div>
                <h1>WELCOME CADET</h1>
                <h3>campuses</h3>
                <div>
                    {this.state.campuses.map(campus=>{
                        return (
                            <Link to={`/campuses/${campus.id}`} key={campus.id}>
                                <div>{campus.name}</div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}