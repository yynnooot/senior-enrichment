import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Students extends Component{
    constructor(){
        super();
        this.state = {
            students: []
        };
    }

    componentDidMount(){
        axios.get('/api/students')
            .then(res => res.data)
            .then(students => this.setState({students}));
        }

    render(){
        console.log("students: ", this.state.students)
        const students = this.state.students;
        return (
            <div>
                <h1>Students</h1>
                <div>
                    {
                        students.map(student=>{
                            console.log('one student',student)
                            return (
                                <div key={student.id}>
                                    <Link to={`/students/${student.id}`} >
                                        <div>{student.fullname}</div>
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
