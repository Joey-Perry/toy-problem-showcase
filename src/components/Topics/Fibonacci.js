import React, { Component } from 'react';

class Fibonacci extends Component{
    constructor(props){
        super(props);

        this.state = {
            userInput: '',
            fibonacciSequence: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    solveProblem(){
        /** Given a number 'n', calculate the 'nth' number of the Fibonacci Sequence
         * The Fibonacci Sequence goes like this: each number in the sequence is the sum of the two numbers that precede it
         *  Hint: It starts with '0, 1'
         */
        let givenNumber = this.state.userInput;
        let fibonacciArray = [];
        if (givenNumber === '1'){
            fibonacciArray.push(0);
        } else if (givenNumber === '2'){
            fibonacciArray.push(0, 1);
        } else {
            fibonacciArray = [0, 1];
            let nthNumber = givenNumber - 2;
            for(let i = 0; i < nthNumber; i++){
                let nextNumber = fibonacciArray[i] + fibonacciArray[i+1];
                fibonacciArray.push(nextNumber);
            }
        }
        return fibonacciArray;
    }

    handleChange(e){
        this.setState({ userInput: e.target.value })
    }

    handleClick(){
        let fibonacciSequence = this.solveProblem();
        this.setState({ fibonacciSequence: fibonacciSequence });
    }

    render(){
        return(
            <div className='puzzleBox'>
                <h4> Fibonacci </h4>
                <input 
                    onChange={this.handleChange}
                    className='inputLine'/>
                <button 
                    onClick={this.handleClick}
                    className='confirmationButton'>Calculate</button>
                <span className='resultsBox'>{this.state.fibonacciSequence.join(', ')}</span>
            </div>
        )
    }
}

export default Fibonacci;