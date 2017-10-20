import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class EditStudent extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            campusid: "",
            campuses: [],
            createdStudent: ""
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
        axios.put(`/api/students/${this.props.id}`, {
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            campusId: this.state.campusid
        })
        .then(res=>res.data)
        .then(student => {
            return this.props.setStudent(student)
        })
    }
        
    render() {
        console.log("PROPS", this.props)
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleInputChange}>
                <label> EDIT THIS STUDENT BELOW:<br/>
                <label>
                    First Name:
                    </label>
                    <input
                        name="firstname"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleInputChange} />
                <br/>
                <label>
                    Last Name:
                </label>
                    <input
                        name="lastname"
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
                </label>
            </form>

        )
    }
}