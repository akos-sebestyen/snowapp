import React, { Component } from 'react';
import DataBlock from '../dataBlock';
import './index.css';

class DayBlock extends Component {
    render() {
        return (
            <DataBlock data={this.props.data} type={this.props.type}/>
        );
    }
}

export default DayBlock;
