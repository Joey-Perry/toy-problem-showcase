import React, { Component } from 'react';

class Sum extends Component{
    constructor(props){
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
        this.handleClick = this.handleClick.bind(this);
        this.updateFirstNumber = this.updateFirstNumber.bind(this);
        this.updateSecondNumber = this.updateSecondNumber.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }
    solveProblem(num1, num2){
        /** Given two numbers, calculate the sum and display it. */
        let number1 = num1 * 1;
        let number2 = num2 * 1;
        return number1 + number2;
    }
    handleClick(){
        const { number1, number2 } = this.state;
        let result = this.solveProblem(number1, number2);
        this.setState({ sum: result });
    }
    updateFirstNumber(e){
        this.setState({ number1: e.target.value })
    }
    updateSecondNumber(e){
        this.setState({ number2: e.target.value })
    }
    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input 
                    onChange={this.updateFirstNumber}
                    className='inputLine'/>
                <input
                    onChange={this.updateSecondNumber} 
                    className='inputLine' />
                <button 
                    onClick={this.handleClick}
                    className='confirmationButton'>Add</button>
                <span className='resultsBox'>Result: {this.state.sum} </span>
            </div>
        )
    }
}

export default Sum;