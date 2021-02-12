import React from 'react'

export const CityNotFound = () => {
  return (
    <div className="result-details-container not-found">
      <img src="http://openweathermap.org/img/w/04d.png" alt=""/>
      <p>Aucun résultat(s) trouvé(s)...</p>
      <p>Veuillez effectuer une nouvelle recherche</p>
    </div>
  )
}
