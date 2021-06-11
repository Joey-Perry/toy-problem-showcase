import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(props){
        super(props);

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    solveProblem(arr){
        /** Given a string of numbers separated by commas, 
         * split the numbers into two different arrays. 
         * The first being an array of all the even numbers 
         * and the second being an array of all the odd numbers. */
        let evenArr = [];
        let oddArr = [];
        arr.forEach(element => {
            /** If the element divided by 2 has a remainder of 0, it is even */
            if (!(element % 2)){
                evenArr.push(element);
            } else {
                oddArr.push(element);
            }
        })

        return { evenArr, oddArr } 
    }

    handleChange(e){
        this.setState({userInput: e.target.value })
    }
    handleClick(){
        let userArray = this.state.userInput.split(',');
        let separatedArr = this.solveProblem(userArray);
        this.setState({ evenArray: separatedArr.evenArr });
        this.setState({ oddArray: separatedArr.oddArr });
    }

    render(){
        const { evenArray , oddArray } = this.state;
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input 
                    onChange={this.handleChange} 
                    className='inputLine'/>
                <button 
                    onClick={this.handleClick} 
                    className='confirmationButton'> Split </button>
                <span className='resultsBox'>Evens: {evenArray.join(', ')} </span>
                <span className='resultsBox'>Odds: {oddArray.join(', ')} </span>
            </div>
        )
    }
}

export default EvenAndOdd;