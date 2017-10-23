import React, { Component } from 'react';
import DayBlock from '../components/dayBlock';
import Loading from '../components/loading';
import WrapWithApiData from '../hoc/async-middleware';

const prettyTitle = function (titlestring) {
    var splitStr = titlestring.toLowerCase().split('-');
    return splitStr.map(function (i) { return i.charAt(0).toUpperCase() + i.substring(1); }).join(' ');
}

const WeatherCard = ({ days = null, name, webcamUrl = '', deleteCard, openPopup }) => {
    return (
        <div className='weather-card'>
            {days ?
                <div>
                    <div className='weather-card-header'>
                        <div>
                        <h2>
                            {name ? prettyTitle(name) : null}
                        </h2>
                        {webcamUrl != '' &&
                        (<h2 className='webcam-button' onClick={openPopup.bind(this, webcamUrl)} value={webcamUrl}>
                            📷
                        </h2>)}
                        </div>
                        <i onClick={deleteCard}
                            className='icon-cancel-circled2 delete-button'></i>
                    </div>
                    <div className='weather-card-inner'>
                        {
                            days ?
                                days.map((dayData, index) => {
                                    return dayData.time && index < 5 ?
                                        <DayBlock key={dayData.name + index}
                                            data={dayData}
                                            type={'weather-card-day-' + index} /> :
                                        null;
                                })
                                :
                                <Loading />
                        }
                    </div>
                </div>
                :
                <Loading />
            }
        </div>
    );
}

export default WrapWithApiData(WeatherCard);
