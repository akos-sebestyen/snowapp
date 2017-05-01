import React, { Component } from 'react';
import './index.css';

class ContentBlock extends Component {
    
    render(){
        return (
            <div className={'content-block ' + this.props.type}>
                {this.props.children}
            </div>
        );
    }
}

export default ContentBlock;
