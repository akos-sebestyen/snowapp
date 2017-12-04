import React, { Component } from 'react';

// const Modal = ({ imgUrl, closeFunc }) => {
//     return (
//         <div className='modal-bg'>
//             <div className='modal-card weather-card'>
//                 <div className='weather-card-header modal-header'>
//                     <i onClick={closeFunc}
//                         className='icon-cancel-circled2 delete-button'></i>
//                 </div>
//                 <div className='modal-image'>
//                     <img src={imgUrl} alt='sweet powder i hope' />
//                 </div>
//             </div>
//         </div>
//     );
// }

class WebcamModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curIndex: 0
        }
        this.incIndex = this.incIndex.bind(this);
        this.decIndex = this.decIndex.bind(this);
    }
    incIndex() {
        this.setState(function (prevState, props) { return { curIndex: prevState.curIndex + 1 }; });
    }
    decIndex() {
        this.setState(function (prevState, props) { return { curIndex: prevState.curIndex - 1 }; });
    }
    render() {
        let currentImage = this.props.imgUrls[Math.abs(this.state.curIndex) % this.props.imgUrls.length];
        console.log('currentImage', currentImage);
        console.log('curIndex', this.state.curIndex);
        console.log('imgurls', this.props.imgUrls)
        return (
            <div className='modal-bg'>
                <div className='modal-card weather-card'>
                { this.props.imgUrls.length > 1 && 
                <div>
                            <span className='modal-back-button' onClick={this.decIndex}>👈</span>
                            <span className='modal-forward-button' onClick={this.incIndex}>👉</span>
                        </div>
                }
                    <div className='weather-card-header modal-header'>
                        <i onClick={this.props.closeFunc}
                            className='icon-cancel-circled2 delete-button'></i>
                    </div>
                    <div className='modal-image'>
                        <img src={currentImage} alt='sweet powder i hope' />
                    </div>
                </div>
            </div>
        );
    }
}

// export default Modal;
export default WebcamModal;