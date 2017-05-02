import React, { Component } from 'react';
import DataBlock from '../dataBlock';
import TitleBlock from '../titleBlock';
import './index.css';

class ContentRow extends Component {
    render() {
        return (
            <div className='content-row'>
                {
                    Object.keys(this.props.data).map((key, index) => {
                        console.log(key + this.props.data[key]);
                        return index > 0 ? <DataBlock key={key + index} type={key} data={this.props.data[key]} />
                            : <TitleBlock key={key + index}>{this.props.data[key]}</TitleBlock>;
                    })
                }
            </div>
        );
    }
}

export default ContentRow;
