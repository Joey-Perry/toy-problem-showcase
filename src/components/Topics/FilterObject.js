import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(props){
        super(props);
        this.state ={
            unFilteredArray: [ {
                name: 'Hyuundai Accent',
                color: 'white',
                accidents: false,
            }, 
            {
                name: 'Nissan Sentra',
                color: 'black',
                insurance: true
            }, 
            {
                name: 'Ford Explorer',
                accidents: true,
                insurance: true
            }
        ],
            userInput: '',
            filteredArray: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    solveProblem(){
        /** Using a pre-determined array of objects, 
         * filter out objects that do not have a given property. 
         * Display a new array populated with the objects that do have the given property. */
        let givenProperty = this.state.userInput;
        let newArray = []
        this.state.unFilteredArray.forEach(obj => {
            /** if an object has a given property, add to new array */
            if (obj[givenProperty] !== undefined){
                newArray.push(obj);
            }
        })

        return newArray;
    }
    handleChange(e){
        this.setState({ userInput: e.target.value});
    }
    handleClick(){
        let arrayAfterFilter = this.solveProblem();
        this.setState({ filteredArray: arrayAfterFilter });
    }
    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <input 
                    onChange={this.handleChange}
                    className='inputLine' />
                <button 
                    onClick={this.handleClick}
                    className='confirmationButton'> Filter</button>
                <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unFilteredArray)}</span>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 5)} </span>
            </div>
        )
    }
}

export default FilterObject;