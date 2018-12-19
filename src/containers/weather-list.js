import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/weather-data';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {

        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp-273);
        const press = cityData.list.map(weather => weather.main.pressure);
        const hums = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={cityData.city.name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="orange" units="°C"/></td>
                <td><Chart data={press} color="green" units="mmHg"/></td>
                <td><Chart data={hums} color="blue" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);