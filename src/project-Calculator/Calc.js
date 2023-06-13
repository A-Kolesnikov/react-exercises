import { Component } from 'react';
import App from './App';
import { useState } from 'react';
import { KeyboardDec } from './KeyboardDec';
import { KeyboardBin } from './KeyboardBin';

export class Calc extends Component {
    constructor() {
        super();
        this.state = {
            number: '0',
            numbers: [],
            operator: '',
            expression: '',
            expressions: [],
            newOperationFlag: 0,
            mode: 'dec'
        };
        this.getNumber = this.getNumber.bind(this);
        this.getOperator = this.getOperator.bind(this);
        this.solve = this.solve.bind(this);
        this.clear = this.clear.bind(this);
        this.changeMode = this.changeMode.bind(this);

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
    getOperator(operator) {
        if (this.state.numbers.length === 0) {
            const num1 = this.state.number;
            const tempArr = [num1]
            this.setState({ operator: operator, numbers: tempArr, number: '0' });

        } else if (this.state.number === '0') {
            this.setState({ operator: operator });
        } else {
            alert('Only 1 operation at a time is available')
        }
    }

    solve() {
        if (this.state.numbers.length > 0) {
            const numbersArr = this.state.numbers;
            numbersArr.push(this.state.number);
            let answer;
            let result;
            switch (this.state.operator) {
                case '+':
                    if (this.state.mode === 'dec'){
                        answer = parseInt(numbersArr[0]) + parseInt(numbersArr[1]);
                        result = this.state.expression + " = " + answer;
                        break;
                    } else if (this.state.mode === 'bin'){
                        answer = parseInt(numbersArr[0], 2) + parseInt(numbersArr[1], 2);
                        answer = answer.toString(2)
                        result = this.state.expression + " = " + answer;
                        break;
                    }
                case '-':
                    if (this.state.mode === 'dec'){
                        answer = parseInt(numbersArr[0]) - parseInt(numbersArr[1]);
                        result = this.state.expression + " = " + answer;
                        break;
                    } else if (this.state.mode === 'bin'){
                        answer = parseInt(numbersArr[0], 2) - parseInt(numbersArr[1], 2);
                        answer = answer.toString(2)
                        result = this.state.expression + " = " + answer;
                        break;
                    }
                case '*':
                    answer = parseInt(numbersArr[0]) * parseInt(numbersArr[1]);
                    result = this.state.expression + " = " + answer;
                    break;
                case '/':
                    answer = parseInt(numbersArr[0]) / parseInt(numbersArr[1]);
                    result = this.state.expression + " = " + answer;
                    break;
                }
                result = `${numbersArr[0]} ${this.state.operator} ${numbersArr[1]} = ${answer}`

                const tempExpArr = this.state.expressions;
                tempExpArr.push(result)
                if (tempExpArr.length > 5) {
                    tempExpArr.shift()
                }
                this.setState({ expressions: tempExpArr, newOperationFlag: 1 })

                this.clear()
        }
    }

    clear() {
        this.setState({ number: '0', numbers: [], operator: '', expression: '', newOperationFlag: 0 })
        /*this.setState({ numbers: [] })
        this.setState({ operator: '' })
        this.setState({ expression: '' })
        this.setState({ newOperationFlag: 0})*/
    }

    changeMode(e){
        this.setState({ mode: e.target.value })
        this.clear()
    }

    /*updExpression(){
        let tempExp
        if (this.state.numbers.length === 0){
            tempExp = this.state.number;
        } else {
            tempExp = this.state.numbers[0] + this.state.operator + this.state.number;
        }
        this.setState({ expression: tempExp})}*/ //Why it delays by 1 step

    render() {
        let buttonName = 'Clear'
        const expressionsToShow = this.state.expressions.map(element => { const uuid = crypto.randomUUID(); return <li key={uuid}>{element}</li> })
        const keysDec = <KeyboardDec signature={buttonName} kbGetNumber={this.getNumber} kbClear={this.clear} kbGetOperator={this.getOperator} kbSolve={this.solve} />
        const keysBin = <KeyboardBin kbGetNumber={this.getNumber} kbClear={this.clear} kbGetOperator={this.getOperator} kbSolve={this.solve} />
        let keyboard
        buttonName = 'CLEAR' // doesn`t affect component without rerender
        if (this.state.mode === 'dec') {
            keyboard = keysDec
        } else {
            keyboard = keysBin
        }

        let expression
        if (this.state.numbers.length === 0){
            expression = this.state.number;
        } else {
            expression = this.state.numbers[0] + this.state.operator + this.state.number;
        }

        return (
            <div className="container border">

                <div className="row">
                    <h2>Expression: {expression}</h2>
                </div>
                <div className="row">
                    <h3>Switch mode</h3>
                    
                    <div className="col-6">
                    <select defaultValue={this.state.mode} onChange={this.changeMode}>
                        <option value={'dec'}>dec</option>
                        <option value={'bin'}>bin</option>
                    </select>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-6">
                        {keyboard}
                    </div>
                    <div className="col-6">
                        <h4>Previous operations</h4>
                        <ul>
                            {expressionsToShow}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}