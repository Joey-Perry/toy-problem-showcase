import React, { Component } from 'react';
import FilterObject from './FilterObject';

class FilterString extends Component {
    constructor(props){
        super(props);
        this.state = {
            unfilteredArray: ['ironman', 'spiderman', 'batman', 'thor', 'hulk', 'loki', 'black panther'],
            userInput: '',
            filteredArray: [],

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    solveProblem(){
        /** Using a pre-determined array of strings, 
         * filter out strings that do not contain a given string. 
         * Display a new array populated with the strings that do contain the given string. */
        let newArray = [];
        this.state.unfilteredArray.forEach(string => {
            if (string.includes(this.state.userInput)){
                newArray.push(string);
            }
        })

        return newArray;
    }

    handleChange(e){
        this.setState({ userInput: e.target.value });
    }
    handleClick(){
        let arrayAfterFilter = this.solveProblem();
        this.setState({ filteredArray: arrayAfterFilter });
    }
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String </h4>
                <input 
                    onChange={this.handleChange}
                    className='inputLine'/>
                <button 
                    onClick={this.handleClick}
                    className='confirmationButton'> Filter </button>
                <span className='puzzleText'>Unfiltered list: {this.state.unfilteredArray.join(', ')}</span>
                <span className='resultsBox filterStringRB'>{this.state.filteredArray.join(', ')}</span>
            </div>
        )
    }
}

export default FilterString;