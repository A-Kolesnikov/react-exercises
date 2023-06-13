import { Component } from 'react';
import App from './App'
import { useState } from 'react'


export class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            mult: 5
        };
        this.counterPlus = this.counterPlus.bind(this);
        this.counterMinus = this.counterMinus.bind(this);
        this.changeMult = this.changeMult.bind(this);

    }
    counterPlus() {
        this.setState({ counter: this.state.counter + parseInt(this.state.mult) })
    }
    counterMinus() {
        this.setState({ counter: this.state.counter - parseInt(this.state.mult) })
    }
    changeMult(e) {
        console.log(e.target.value)
        this.setState({ mult: e.target.value })
    }
    render() {
        return (
            <div className="container border">

                <div className="row">
                    <h2>Counter</h2>
                </div>
                <div className="row">
                    Counter is: {this.state.counter}
                </div>
                <div className="row">
                    <button className="col-xl-5 col-md-4" onClick={this.counterMinus}>- {this.state.mult}</button>
                    <select className="col-xl-2 col-md-4" defaultValue={this.state.mult} name='mult' id='mult' onChange={this.changeMult}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                    </select>
                    <button className="col-xl-5 col-md-4" onClick={this.counterPlus}>+ {this.state.mult}</button>
                </div>
            </div>
        )
    }
}