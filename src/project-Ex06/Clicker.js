import { Component } from 'react';
import App from './App';
import { useState } from 'react';
import { Segment } from './Segment';
import { Answer } from './Answer';

export class Clicker extends Component {
    constructor() {
        super();
        this.state = {
            number: '',
        };
        this.getNumber = this.getNumber.bind(this);

    }
    getNumber(number) {
        /*if (this.state.newOperationFlag === 1){
            this.clear()
        }*/ //Why it doesn`t work here but works in solve()?!
        if (this.state.number === '0') {
            this.setState({ number: number })
        } else {
            this.setState({ number: this.state.number + number });
        }
    }

    render() {
        const segment = < Segment num1 = {1} num2 = {2} />
        return (
            <div className="container border">
            
            < Segment num1 = {1} num2 = {2} />
            < Segment num1 = {1} num2 = {2} />
            < Answer num = {this.state.number} />

            </div>
        )
    }
}