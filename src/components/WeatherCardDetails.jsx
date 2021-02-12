import React, { Fragment } from 'react'
import { CityNotFound } from './CityNotFound';
import { WeatherDetailsByCity } from './WeatherDetailsByCity';

export const WeatherCardDetails = (props) => {
    const notFoundCode = '404';

    return (
        <Fragment>
            <div className="result-container">
                {props.weatherData.cod === notFoundCode ?
                    <CityNotFound /> :
                    <WeatherDetailsByCity weatherData={props.weatherData} />
                }
            </div>
        </Fragment>


    )
}

