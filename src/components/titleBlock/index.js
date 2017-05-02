import React, { Component } from 'react';
import ContentBlock from '../contentBlock';
import './index.css';

class titleBlock extends Component {
    render() {
        return (
            <ContentBlock type={'title'}>
                <h2>{this.props.children}</h2>
            </ContentBlock>
        );
    }
}

export default titleBlock;
