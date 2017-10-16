import React, { Component } from 'react';
import axios from 'axios';

export default class Campuses extends Component {
    constructor(){
        super();
        this.state = {
            campuses : []
        }
    }

    componentDidMount(){
        axios.get('/api/campuses')
            .then(res => res.campuses)
            .then(campuses => this.setState({campuses: campuses}))
    }
    
    render(){
        console.log('*****',this.state.campuses)
        return (
            <div>
                //map over all campuses and return single campus
            </div>
        )
    }
}