import React, { Fragment } from 'react'
import { CityNotFound } from './CityNotFound';
import { WeatherDetailsByCity } from './WeatherDetailsByCity';

export const WeatherCardDetails = (props) => {
    const notFoundCode = '404';

    return (
        <Fragment>
            <div className="result-container">
                {props.weather.cod === notFoundCode ?
                    <CityNotFound /> :
                    <WeatherDetailsByCity weather={props.weather} />
                }
            </div>
        </Fragment>


    )
}

