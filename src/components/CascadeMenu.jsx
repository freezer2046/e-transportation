import React, { Component } from 'react';

export class CascadeMenu extends Component {


    render() {
        return (
            <div>
                <select onChange={this.props.handleChange} >
                    {this.props.mainmenu.map((e, i) => {
                        return <option key={i} value={e}>{e}</option>
                    })}
                </select>
                {this.props.show === '' ? null : <input type='button' value='Submit' onClick={this.props.onSubmit} />}
            </div>
        )
    }
}

export default CascadeMenu;