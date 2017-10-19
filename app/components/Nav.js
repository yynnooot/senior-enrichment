import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import AddCampus from './AddCampus';
import AddStudent from './AddStudent';

export default class Nav extends Component {
    render(){
        return (
            <div id="nav-bar">
                <div className="logo">Logo</div>
                <div>
                    <button><Link to={`/`}>Campuses</Link></button>
                    <button><Link to={`/students/`}>Students</Link></button>
                </div>
                <div id="addDiv">
                    <button><Link to={`/addstudent`}>Add Student</Link></button>
                    <button><Link to={`/addcampus/`}>Add Campus</Link></button>
                </div>    
            </div>   
        )
    }
}