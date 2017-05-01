import React, { Component } from 'react';
import ContentBlock from '../contentBlock';
import './index.css';

class dataBlock extends Component {
    render() {
        return (
            <ContentBlock type={this.props.type}>
                <div className='data-block-title'>
                    {this.props.type}
                </div>
                <div className='data-block-data'>
                    <ul>
                        {
                            this.props.data.map((datum, i) => {
                                return (
                                    <li key={'li-'+datum+i}>
                                        {
                                            !!this.props.times &&
                                            <div>
                                                {this.props.times[i]}
                                            </div>
                                        }
                                        <div>
                                            {datum}
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </ContentBlock>
        );
    }
}

export default dataBlock;
