import React, { Component } from 'react';
import rainimg from '../../../assets/rain.png';
import snowimg from '../../../assets/snow.png';
import tempimg from '../../../assets/temp.png';
// const ignore

class dataBlockShort extends Component {
    findTotal(arrayOfValues) {
        return arrayOfValues.reduce((a, b) => {
            if (!!parseInt(a, 10) && !!parseInt(b, 10)) {
                return parseInt(a, 10) + parseInt(b, 10);
            }
            if (!!parseInt(a, 10)) { return a; }
            if (!!parseInt(b, 10)) { return b; }
            return '-';
        });
    }
    lolEmoji(lol) {
        switch (lol) {
            case 'rain':
                return <img src={rainimg} alt='rain' />;
            case 'temp':
                return <img src={tempimg} alt='temp' />;
            case 'snow':
                return <img src={snowimg} alt='snow' />;
            default:
                return lol;
        }
    }

    render() {
        return (
            <div className='measurement-row'>
                <div key={this.props.type} className={'icon'}>
                    {this.lolEmoji(this.props.type)}</div>
                <div>{this.props.type === 'temp' ?
                    this.props.data[1] :
                    this.findTotal(this.props.data)
                }
                </div>
            </div>
        );
    }
}



export default dataBlockShort;
