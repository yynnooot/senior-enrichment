import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class EditCampus extends Component{
    constructor(props){
        super(props);
        this.state = {
            campusName: "",
            campusUrl: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        axios.put(`/api/campuses/${this.props.id}`, {
            name: this.state.campusName,
            image: this.state.campusUrl
        })
        .then(res=>res.data)
        .then(campus => {
            return this.props.setCampus(campus)
        })
    }
        
    render() {
        return (
            <form id="student-edit-form" onSubmit={this.handleSubmit}>
                <label className="edit-form-input">
                    Campus Name:
                
                    <input
                        name="campusName"
                        type="text"
                        value={this.state.campusName}
                        onChange={this.handleInputChange} />
                </label>
                <label className="edit-form-input">
                    Campus Image Url:
                
                    <input
                        name="campusUrl"
                        type="text"
                        value={this.state.campusUrl}
                        onChange={this.handleInputChange} />
                </label>
                <input className="edit-form-input" type="submit" name="submit"/>
            </form>
        )
      }
    }