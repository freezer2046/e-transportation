import React, { Component } from 'react';
import CascadeMenu from './CascadeMenu';

export class Cascade extends Component {
    state = {
        MainmenuText: ['China', 'Japan', 'US'],
        SecondmenuTextA: ['Beijing', 'Nanjing', 'Shanghai'],
        SecondmenuTextB: ['Osaka', 'Tokyo', 'Kansai'],
        SecondmenuTextC: ['CA', 'NJ', 'TX'],
        currentValue: '',
        changedValue: [],
    }

    handleChange = (e) => {
        e.preventDefault();
        const text = e.target.value;
        this.setState({ currentValue: text })
        console.log(this.state.currentValue);
    }

    SubmitValue = () => {
        const next = [...this.state.changedValue, this.state.currentValue];
        this.setState({
            changedValue: next,
        })
    }

    showListA = (X) => {
        switch (X) {
            case 'China':
                return <CascadeMenu mainmenu={this.state.SecondmenuTextA} menu='AA' handleChange={this.handleChange} onSubmit={this.SubmitValue} show={this.state.currentValue} />
            case 'Japan':
                return <CascadeMenu mainmenu={this.state.SecondmenuTextB} menu='BA' handleChange={this.handleChange} onSubmit={this.SubmitValue} show={this.state.currentValue} />
            case 'US':
                return <CascadeMenu mainmenu={this.state.SecondmenuTextC} menu='CA' handleChange={this.handleChange} onSubmit={this.SubmitValue} show={this.state.currentValue} />
            default:
        }
    }

    render() {

        return (
            <div className='main'>
                <CascadeMenu mainmenu={this.state.MainmenuText} menu='A' handleChange={this.handleChange} onSubmit={this.SubmitValue} show={this.state.currentValue} />
                {this.showListA(this.state.changedValue[0])}
            </div>
        )
    }
}

export default Cascade;
