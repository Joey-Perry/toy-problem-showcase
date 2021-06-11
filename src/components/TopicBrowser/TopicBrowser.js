import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd.js';
import FilterObject from '../Topics/FilterObject.js';
import FilterString from '../Topics/FilterString.js';
import Palindrome from '../Topics/Palindrome.js';
import Sum from '../Topics/Sum.js';
import FizzBuzz from '../Topics/FizzBuzz.js';
import Fibonacci from '../Topics/Fibonacci.js';

class TopicBrowser extends Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <div>
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
                <FizzBuzz />
                <Fibonacci />
            </div>
        )
    }
}

export default TopicBrowser;