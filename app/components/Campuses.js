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
            <div>
                <h1>WELCOME CADET</h1>
                <h3>Campuses</h3>
                <div>
                    {
                        this.state.campuses.map(campus=>{
                            return (
                                <div key={campus.id}>
                                    <Link to={`/campuses/${campus.id}`} >
                                        <div>{campus.name}</div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}