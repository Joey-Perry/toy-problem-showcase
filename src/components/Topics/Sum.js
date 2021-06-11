import React, { Component } from 'react';

class Sum extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    solveProblem(){
        /** Given two numbers, calculate the sum and display it. */
    }
    handleClick(){
        this.solveProblem();
    }
    handleChange(){
        
    }
    render(){
        return(
            <p> Sum Component</p>
        )
    }
}

export default Sum;