import React, { Component } from 'react';

const WrapWithApiData = (OrigComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: {
    
                }
            };
        }
        componentWillMount() {
            fetch(`/api/${this.props.apiRoute}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ data: data });
                });
        }
        render(){
            const {apiRoute, ...rest} = this.props;
            return(
                <OrigComponent {...this.state.data} {...rest} />
            )
        }
    }
}

export default WrapWithApiData;
