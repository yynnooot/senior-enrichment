import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class Student extends Component{
    constructor(props){
        super(props);
        this.state = {
            student: {},
            campus: {}
        }
    }
    componentDidMount(){
        const studentid = this.props.match.params.studentid;
        
        axios.get(`/api/students/${studentid}`)
            .then(res => res.data)
            .then(student => {this.setState({student, campus: student.campus})})  
    }
    render(){
        const student = this.state.student;
        const campus = this.state.campus
        console.log('student', student)
        console.log('campus',campus)
        return (
            <div>
                <div>
                    <h1>{student.fullname}</h1>
                    <h3>{student.email}</h3>
                    <Link to={`/campuses/${campus.id}`}><h3>{campus.name}</h3></Link>
                </div>
            </div>
        )
    }
}