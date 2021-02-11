import React, { useState, useEffect, Fragment } from 'react'
import WeatherService from '../service/WeatherService';
import { WeatherCardDetails } from './WeatherCardDetails';

export const WeatherCard = (props) => {

    const [weather, setWeather] = useState('');

    useEffect(() => {
        refreshWeather()
    }, [props.city])

    const refreshWeather = () => {
        WeatherService.getWeatherByCity(`${props.city}`).then((weatherByCity) => setWeather(weatherByCity) );
    }

    return (
        <Fragment>
            { weather != "" && <WeatherCardDetails weather={weather}/> }
        </Fragment>
        
    )
}