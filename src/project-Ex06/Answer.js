import { Component } from 'react';
import App from './App';
import { useState } from 'react';

export class KeyboardBin extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            mult: 5
        };
    }

    render() {
        return (
            <div className="container border">

                <div className="row">
                    <button className='col-1' onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>0</button>
                    <button className='col-1' onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>1</button>
                    
                </div>
                <div className="row">
                    <button className='col-1' onClick={(e) => this.props.kbGetOperator(e.target.textContent)}>+</button>
                    <button className='col-1' onClick={(e) => this.props.kbGetOperator(e.target.textContent)}>-</button>
                </div>
                <div className="row">
                    <button className='col-2' onClick={(e) => this.props.kbSolve()}>=</button>
                </div>
                <div className="row">
                    <button className='col-4' onClick={()=> this.props.kbClear()}>Clear</button>
                </div>
            </div>
        )
    }
}