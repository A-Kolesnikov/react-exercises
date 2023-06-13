import { Component } from 'react';
import App from './App';
import { useState } from 'react';

export class KeyboardDec extends Component {
    constructor() {
        super();
        this.state = {
            //counter: 0,
        };
    }

    render() {
        return (
            <div className="container border">

                <div className="row">
                    <button className='col-1' onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>1</button>
                    <button className='col-1' onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>2</button>
                    <button className='col-1' onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>3</button>
                    <button className='col-1' onClick={(e) => this.props.kbGetOperator(e.target.textContent)}>+</button>
                </div>
                <div className="row">
                    <button className='col-1' onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>4</button>
                    <button className='col-1' onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>5</button>
                    <button className='col-1' onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>6</button>
                    <button className='col-1' onClick={(e) => this.props.kbGetOperator(e.target.textContent)}>-</button>
                </div>
                <div className="row">
                    <button className='col-1' onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>7</button>
                    <button className='col-1' onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>8</button>
                    <button className='col-1' onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>9</button>
                    <button className='col-1' onClick={(e) => this.props.kbGetOperator(e.target.textContent)}>*</button>
                </div>
                <div className="row">
                    <button className='col-1' onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>0</button>
                    <button className='col-2' onClick={(e) => this.props.kbSolve()}>=</button>
                    <button className='col-1' onClick={(e) => this.props.kbGetOperator(e.target.textContent)}>/</button>
                </div>
                <div className="row">
                    
                    <button className='col-4' onClick={()=> this.props.kbClear()}>{this.props.signature}</button>
                    
                    
                </div>
            </div>
        )
    }
}