import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

import EditCampus from './EditCampus';

export default class Campus extends Component {
    constructor(props){ 
        super(props);
        this.state={
            campus: {},
            students: []
        }
        this.renderNewCampus = this.renderNewCampus.bind(this);
    }

    componentDidMount(){
        const campusid = this.props.match.params.campusid;
        axios.get(`/api/campuses/${campusid}`)
            .then(res => res.data)
            .then(campus => this.setState({campus, students: campus.students}))
    }
    onEditClick(){
        this.setState({isEdit: !this.state.isEdit})
    }

    onDelete(){ 
        if (confirm("Are you sure you want to DELETE this Campus?") == true) {
            const campusid = this.props.match.params.campusid;
            axios.delete(`/api/campuses/${campusid}`)
             if(confirm("Campus has been deleted")){
                this.props.history.push(`/campuses/`);
             }
             //<Redirect from={`/campuses/${campusid}`} to='/campuses'/>
        } else {
            return
        }
    }
    renderNewCampus(campus) {
        this.setState({
            campus: campus,
            isEdit: false
        })
    }
    render(){
        
        const campus = this.state.campus;
        const students = this.state.students;
       
        return(
            <div>
                <h1>CAMPUS: {campus.name}</h1>
                <div id="campus-btn-form">
                    <button onClick={this.onDelete.bind(this)}>delete</button>
                    <button onClick={this.onEditClick.bind(this)}>edit</button>
                    {this.state.isEdit? 
                        <EditCampus id={campus.id} setCampus={this.renderNewCampus}/> : false
                    }           
                </div>
                <h3>Students:</h3>
                <div className="student-container" addstudentbtn>
                    {students.map(student => {
                        return (
                            <Link to={`/students/${student.id}`} key={student.id}>
                                <div>{student.fullname}</div>
                            </Link>
                        )
                    }  
                    )}
                </div>

            </div>
        )
    }
}