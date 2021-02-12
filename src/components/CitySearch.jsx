import React, { useState, Fragment } from 'react'
import { CitySearchForm } from './CitySearchForm'

export const CitySearch = (props) => {
  const [searchedCity, setSearchedCity] = useState('');

  const handleChange = (event) => {
    setSearchedCity(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleChange(searchedCity);
  }

  return (
    <Fragment>
      <div className="city-search-form">
        <h2>Rechercher une ville</h2>
        <CitySearchForm searchedCity={searchedCity}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </Fragment>
  )
}
