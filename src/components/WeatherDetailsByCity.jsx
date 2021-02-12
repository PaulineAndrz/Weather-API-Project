import React, { Fragment } from 'react'

export const WeatherDetailsByCity = ({ weatherData }) => {
    return (
        <Fragment>
            <h2>{weatherData.name}</h2>
            <div className="flex important-details-container found">
                <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={`${weatherData.weather[0].description}`}/>
                <p>{weatherData.weather[0].description}</p>
                <p>{weatherData.main.temp}°C</p>
            </div>
            <div className="result-details-container">
                <p>Ressenti : {weatherData.main.feels_like}°C</p>
                <p>Min : {weatherData.main.temp_min}°C</p>
                <p>Max : {weatherData.main.temp_max}°C</p>
                <p>Humidité : {weatherData.main.humidity}%</p>
                <p>Pression : {weatherData.main.pressure}hPa</p>
            </div>
        </Fragment>
    )
}
