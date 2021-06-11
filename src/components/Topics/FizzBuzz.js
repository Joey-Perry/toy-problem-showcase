import React, { Component } from 'react';


class FizzBuzz extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            fizzBuzzArray: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    solveProblem(){
        /** Given a number, print a list of numbers up to that number
         * If a number is divisible by 3, print 'Fizz' instead
         * If a number is divisible by 5, print 'Buzz' instead
         * If a number is divisible by both 3 and 5 print 'Fizz Buzz;
         */
        let givenNumber = this.state.userInput * 1;
        let fizzBuzzArray = [];
        for(let i = 1; i < givenNumber + 1; i++){
            if (!(i % 3) && !(i % 5)){
                fizzBuzzArray.push('Fizz Buzz');
            } else if (!(i % 3)){
                fizzBuzzArray.push('Fizz');
            } else if (!(i % 5)){
                fizzBuzzArray.push('Buzz');
            } else {
                fizzBuzzArray.push(i);
            }
        }
        return fizzBuzzArray;
    }

    handleChange(e){
        this.setState({ userInput: e.target.value })
    }

    handleClick(){
        let fizzBuzzArray = this.solveProblem();
        this.setState({ fizzBuzzArray: fizzBuzzArray })
    }

    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Fizz Buzz</h4>
                <input 
                    onChange={this.handleChange}
                    className='inputLine'/>
                <button 
                    onClick={this.handleClick}
                    className='confirmationButton'>Calculate</button>
                <span className='resultsBox filterObjectRB'>{this.state.fizzBuzzArray.join(', ')}</span>
            </div>
        )
    }
}

export default FizzBuzz;

