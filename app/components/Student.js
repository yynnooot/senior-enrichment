import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import EditStudent from './EditStudent';

export default class Student extends Component{
    constructor(props){
        super(props);
        this.state = {
            student: {},
            campus: {},
            isEdit: false
        }
        this.renderNewStud = this.renderNewStud.bind(this)
    }
    componentDidMount(){
        const studentid = this.props.match.params.studentid;
        
        axios.get(`/api/students/${studentid}`)
            .then(res => res.data)
            .then(student => {this.setState({student, campus: student.campus})})  
    }

    onEditClick(){
        this.setState({isEdit: !this.state.isEdit})
    }

    renderNewStud(stud) {
        this.setState({
            student: stud,
            isEdit: false
        })
    }
   
    render(){
        const student = this.state.student;
        const campus = this.state.campus
        console.log('student', student)
        console.log('campus', campus)
        return (
            <div>
                <div>
                    <h1>Student</h1>
                    <h3>Name: {student.fullname}</h3>
                    <h3>Email: {student.email}</h3>
                    <Link to={`/campuses/${campus.id}`}>
                        <h3>Campus: {campus.name}</h3>
                    </Link>
                    
                    <button id="delete-student">delete</button>
                </div>
                <div>
                    <button onClick={this.onEditClick.bind(this)}>edit</button>
                    {this.state.isEdit? 
                        <EditStudent id={student.id} setStudent={this.renderNewStud}/> : false
                    }           
                </div>
            </div>
        )
    }
}