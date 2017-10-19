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

    componentDidMount(){
       
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
            
        })
        .then(res=>res.data)
        .then(campus => {
            return this.props.setCampus(campus)
        })
    }
        
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Campus Name:
                </label>
                <input
                    name="campusName"
                    type="text"
                    value={this.state.campusName}
                    onChange={this.handleInputChange} />
                
                <label>
                    Campus Image Url:
                </label>
                    <input
                        name="campusUrl"
                        type="text"
                        value={this.state.campusUrl}
                        onChange={this.handleInputChange} />
                
                <input type="submit" name="submit"/>
            </form>
        )
      }
    }