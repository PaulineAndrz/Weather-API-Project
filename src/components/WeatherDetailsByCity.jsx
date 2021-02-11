import React, { Fragment } from 'react'

export const WeatherDetailsByCity = ({ weather }) => {
    return (
        <Fragment>
            <h2>{weather.name}</h2>
            <div className="flex important-details-container">
                <p>{weather.weather[0].description}</p>
                <p>{weather.main.temp}°C</p>
            </div>
            <div className="result-details-container">
                <p>Ressenti : {weather.main.feels_like}°C</p>
                <p>Min : {weather.main.temp_min}°C</p>
                <p>Max : {weather.main.temp_max}°C</p>
                <p>Humidité : {weather.main.humidity}%</p>
                <p>Pression : {weather.main.pressure}hPa</p>
            </div>
        </Fragment>
    )
}
