import { useState, Fragment } from 'react';
import { CitySearchForm } from './components/CitySearchForm';
import { WeatherCard } from './components/WeatherCard';
import { Header } from './components/commons/Header';

import './App.css';


export default function App() {

  const [city, setCity] = useState('');

  const handleChange = (searchedCity) => {
    setCity(searchedCity);
  }

  return (
    <Fragment>
      <div className="center">
        <Header />
        <div className="container" >
          <CitySearchForm handleChange={handleChange} />
          {city && <WeatherCard city={city} />}
        </div>
      </div>
    </Fragment>
  );
}