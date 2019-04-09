import React, { Component } from 'react';
import '../Calculator.css';

export class Calculator extends Component {
    state = {
        value: [],
        currentProcess: [],
        eval: [],
        result: 0,
    }

    clear = () => {
        this.setState({
            value: [],
            currentProcess: [],
            eval: [],
            result: 0,
        })
    }

    Click = (e) => {
        this.setState({
            currentProcess: [...this.state.currentProcess, e.target.value],
        })
    }

    add = () => {
        var temp = this.state.currentProcess.join('');
        if (temp.length !== 0) {
            if (this.state.eval.length === 0) {
                this.setState({
                    eval: [...this.state.eval, temp],
                })
            } else {
                temp = ['+', temp];
                this.setState({
                    eval: [...this.state.eval, ...temp],
                })
            }
        }
        console.log(this.state.eval);
    }

    equal = () => {
        console.log(this.state.eval);
        var x = this.state.eval.join('');
        this.setState({
            currentProcess: eval(x),
        })
        console.log(this.state.result)
    }

    render() {
        return (
            <div className="container">
                <p>Calculator!</p>
                <div className="calculator">
                    <div className="calculator__display">{this.state.currentProcess.length === 0 ? <span>0</span> : this.state.currentProcess}</div>
                    <div className="calculator__keys">
                        <button className="key--operator" onClick={this.add}>+</button>
                        <button className="key--operator" data-action="subtract">-</button>
                        <button className="key--operator" data-action="multiply">&times;</button>
                        <button className="key--operator" data-action="divide">÷</button>
                        <button onClick={this.Click} value='7'>7</button>
                        <button onClick={this.Click} value='8'>8</button>
                        <button onClick={this.Click} value='9'>9</button>
                        <button onClick={this.Click} value='4'>4</button>
                        <button onClick={this.Click} value='5'>5</button>
                        <button onClick={this.Click} value='6'>6</button>
                        <button onClick={this.Click} value='1'>1</button>
                        <button onClick={this.Click} value='2'>2</button>
                        <button onClick={this.Click} value='3'>3</button>
                        <button onClick={this.Click} value='0'>0</button>
                        <button data-action="decimal">.</button>
                        <button data-action="clear" onClick={this.clear}>AC</button>
                        <button className="key--equal" onClick={this.equal}>=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;