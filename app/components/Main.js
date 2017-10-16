import React, { Component } from 'react';
import Nav from './components';
import Campuses from './components';
import axios from 'axios';



export default class Main extends Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <Campuses />
            </div>
        )
        
    }
}