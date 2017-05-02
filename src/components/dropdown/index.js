import React, { Component } from 'react';

class Dropdown extends Component {
    render() {
        return (
            <div>
                <select value={this.props.selected} onChange={this.props.onChange}>
                    {
                        this.props.options.map((elem, i) => {
                            return <option value={elem} key={elem + i}>{elem}</option>
                        })
                    }
                </select>
            </div>
        );
    }
}

export default Dropdown;
