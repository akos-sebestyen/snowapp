import React, { Component } from 'react';

class dataBlockSubContent extends Component {
    render() {
        return (
            <div className='data-block-subcontent'>
                <ul>
                    <li key={this.props.type}>{this.props.type}</li>
                    {
                        this.props.data.map((datum, i) => {
                            return (
                                <li key={'li-' + datum + i}>

                                    <div>
                                        {datum}
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default dataBlockSubContent;
