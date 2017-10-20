import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AddCampus extends Component{
    constructor(){
        super();
        this.state = {
            campusName: "",
            campusUrl: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    handleInputChange(event) {
       
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event){
        event.preventDefault();
        
        axios.post('/api/campuses', {
            name: this.state.campusName,
            image: this.state.campusUrl
        })
        .then(res => res.data)
        .then(newCampusObj => {
            console.log(newCampusObj)
            const campusId = newCampusObj.id;
            this.props.history.push(`/campuses/${campusId}`);
        })
    }

    
    render() {
        return (
            <div id="addcampus-div">
                <div>
                    <h1>Input New Campus Info Below:</h1>
                </div>
                <form id="add-campus-form" onSubmit={this.handleSubmit}>
                    <label>
                        Campus Name:
                    </label>
                    <input
                        name="campusName"
                        type="text"
                        value={this.state.campusName}
                        onChange={this.handleInputChange} />
                    
                    <label><br/>
                        Campus Image Url:
                    </label>
                        <input
                            name="campusUrl"
                            type="text"
                            value={this.state.campusUrl}
                            onChange={this.handleInputChange} />
                            <br/>
                    <input id="addcampusbtn" type="submit" name="submit"/>
                </form>
            </div>
        )
      }
    }