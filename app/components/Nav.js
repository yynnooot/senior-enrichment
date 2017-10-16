import React, { Component } from 'react';

export class Nav extends Component {
    render(){
        return (
            <div>
                <div className="logo">Logo</div>
                <div>
                    <button>Campuses</button>
                    <button>Students</button>
                </div>
            </div>   
        )
    }
}