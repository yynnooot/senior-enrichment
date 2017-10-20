import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav.js';
import Campuses from './Campuses.js';
import Campus from './Campus.js';
import Students from './Students.js';
import Student from './Student.js';
import AddCampus from './AddCampus.js';
import AddStudent from './AddStudent.js';


export default class Main extends Component {
  
    render(){
        return (
            <Router>
                <div>
                    <div>
                        <Nav />
                    </div>
                    <div id="main-container">
                        <Switch>
                            <Route exact path="/campuses" component={Campuses} />
                            <Route path="/campuses/:campusid" component={Campus} />
                            <Route exact path="/students" component={Students} />
                            <Route path="/students/:studentid" component={Student} />
                            <Route path="/addcampus" component={AddCampus} />
                            <Route path="/addstudent" component={AddStudent} />
                            <Route component={Campuses} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}