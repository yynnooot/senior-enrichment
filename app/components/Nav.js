import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

export default class Nav extends Component {
    render(){
        return (
            <div id="nav-bar">
                <div className="logo">Logo</div>
                <div>
                    <button><Link to={`/`}>Campuses</Link></button>
                    <button><Link to={`/students/`}>Students</Link></button>
                </div>
            </div>   
        )
    }
}