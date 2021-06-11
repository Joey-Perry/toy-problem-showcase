import React, { Component } from 'react';

class Palindrome extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            palindrome: '',

        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    solveProblem(){
        /** Using a given string, determine if it is spelt the same backwards as it is forwards. */
        let userInputCopy = this.state.userInput.slice(0);
        let userInputReversed = userInputCopy.split('').reverse().join('');
        let isPalindrome = false;
        if (this.state.userInput === userInputReversed){
            isPalindrome = true;
        }

        return isPalindrome;
    }
    handleChange(e){
        this.setState({ userInput: e.target.value });
    }
    handleClick(){
        if (this.solveProblem()){
            this.setState({ palindrome: true })
        } else {
            this.setState({ palindrome: false })
        };
    }
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome </h4>
                <input 
                    onChange={this.handleChange}
                    className='inputLine'/>
                <button 
                    onClick={this.handleClick}
                    className='confirmationButton'>Check</button>
                <span className='resultsBox'>Palindrome: {`${this.state.palindrome}`}</span>
            </div>
        )
    }
}

export default Palindrome;