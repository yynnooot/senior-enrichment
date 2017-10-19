import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import EditCampus from './EditCampus';

export default class Campus extends Component {
    constructor(props){ //************** DO I NEED PROPS FROM CAMPUSES? */
        super(props);
        this.state={
            campus: {},
            students: []
        }
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
    renderNewCampus(campus) {
        this.setState({
            campus: campus,
            isEdit: false
        })
    }
    render(){
        
        const campus = this.state.campus;
        const students = this.state.students;
        console.log('*****',students)
        return(
            <div>
                <h1>this is ONE CAMPUS</h1>
                <h3>this is: {campus.name}</h3>
                <div>
                    <button onClick={this.onEditClick.bind(this)}>edit</button>
                    {this.state.isEdit? 
                        <EditCampus id={student.id} setCampus={this.renderNewCampus}/> : false
                    }           
                </div>
                <h3>Students:</h3>
                <div>
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