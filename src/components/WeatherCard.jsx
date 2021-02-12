import React, { useState, useEffect, Fragment } from 'react'
import WeatherService from '../service/WeatherService';
import { WeatherCardDetails } from './WeatherCardDetails';

export const WeatherCard = (props) => {

    const [weatherData, setWeatherData] = useState('');

    useEffect(() => {
        refreshWeather()
    }, [props.city])

    const refreshWeather = () => {
        WeatherService.getWeatherByCity(`${props.city}`).then((weatherByCity) => setWeatherData(weatherByCity));
    }

    return (
        <Fragment>
            { weatherData != "" && <WeatherCardDetails weatherData={weatherData}/> }
        </Fragment>
        
    )
}