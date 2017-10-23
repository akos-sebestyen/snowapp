import React from 'react';

const Modal = ({imgUrl, closeFunc}) => {
    return (
        <div className='modal-bg'>
            <div className='modal-card weather-card'>
                <div className='weather-card-header modal-header'>
                <i onClick={closeFunc}
                            className='icon-cancel-circled2 delete-button'></i>
                </div>
                <div className='modal-image'>
                    <img src={imgUrl} alt='sweet powder i hope' />
                </div>
            </div>
        </div>
    );
}

export default Modal;