import { useState, Fragment } from 'react';
import { CitySearch } from './components/CitySearch';
import { WeatherCard } from './components/WeatherCard';
import { Header } from './components/commons/Header';

import './App.css';


export default function App() {

  const [city, setCity] = useState('');

  const handleChange = (searchedCity) => {
    setCity(searchedCity);
  }

  // https://github.com/PaulineAndrz/Weather-API-Project.git

  return (
    <Fragment>
      <div className="center">
        <Header />
        <div className="container" >
          <CitySearch handleChange={handleChange} />
          {city && <WeatherCard city={city} />}
        </div>
      </div>
    </Fragment>
  );
}