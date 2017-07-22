import React, { Component } from 'react';
import DayBlock from '../components/dayBlock';
import Loading from '../components/loading';

const prettyTitle = function (titlestring) {
    var splitStr = titlestring.toLowerCase().split('-');
    return splitStr.map(function (i) { return i.charAt(0).toUpperCase() + i.substring(1); }).join(' ');
}

class WeatherCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mountainData: {

            }
        };
    }
    componentWillMount() {
        fetch(`/api/${this.props.apiRoute}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ mountainData: data });
            });
    }
    render() {
        return (
            <div className='weather-card'>
                {this.state.mountainData.days ?
                    <div>
                        <h2>
                            {this.state.mountainData.name ? prettyTitle(this.state.mountainData.name) : null}
                        </h2>
                        <div className='weather-card-inner'>
                            {
                                this.state.mountainData.days
                                    ?
                                    this.state.mountainData.days.map((dayData, index) => {
                                        return dayData.time && index ?
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
}

export default WeatherCard;
