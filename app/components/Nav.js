import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import AddCampus from './AddCampus';
import AddStudent from './AddStudent';

export default class Nav extends Component {
    render(){
        return (
            <div id="nav-bar">
                <div className="logo"></div>
                <div id="nav-links">
                    <Link to={`/`}><h3>Campuses</h3></Link>
                    <Link to={`/students/`}><h3>Students</h3></Link>
                </div>
                 
            </div>   
        )
    }
}