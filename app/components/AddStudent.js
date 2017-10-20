import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AddStudent extends Component{
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            campusid: "1",
            campuses: [],
            createdStudent: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        axios.get('/api/campuses')
            .then(res => res.data)
            .then(campuses => this.setState({campuses}))
    }

    handleInputChange(event) {
       
        const value = event.target.value; 
        const name = event.target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event){
        event.preventDefault();

        //WHAT IS HAPPENING BEHIND THE SCENES? WHAT DO I NEED TO DO AFTER POSTING OBJECT? 
        //WHAT'S THE RELATIONSHIP BETWEEN THIS AND THE ROUTER.POST - AM I SENDING Req.body??
        axios.post('/api/students', {
            firstname:this.state.firstName,
            lastname:this.state.lastName,
            email:this.state.email,
            campusId: this.state.campusid
        })
        .then(res=>res.data)
        .then(newStudentObj => {
            const studentid = newStudentObj.id
            this.props.history.push(`/students/${studentid}`)
        })
    }  
    render() {
        return (
            <form className="student-container" onSubmit={this.handleSubmit} onChange={this.handleInputChange}>
                <h3>Add A Student</h3>
                <label>
                    First Name:
                    </label>
                    <input
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleInputChange} />
                <br/>
                <label>
                    Last Name:
                </label>
                    <input
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleInputChange} />
                <br/>
                <label>
                    Email:
                </label>
                    <input
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                <br/>
                <label>
                    Select A Campus:
                </label>
                    <select name="campusid">
                    {/* <option selected="true" disabled="disabled">
                        
                    </option> */}
                        {/* HOW DO I SET ONE DEFAULT VALUE OUT OF ALL FOUR CAMPUSES?? */}
                        {this.state.campuses.length && this.state.campuses.map(campus => {
                                return (
                                    <option value={campus.id} key={campus.name}>
                                        {campus.name}
                                    </option>
                            );
                         })}
                         
                  </select>
               <br/>
                <input type="submit" name="submit"/>
            </form>

        )
    }
}