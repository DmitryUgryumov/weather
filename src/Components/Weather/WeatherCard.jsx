import React, { useContext } from 'react';
import Context from "../Context/Context";
import { Link } from "react-router-dom";


const WeatherCard = (props) => {
  const { addCity, selectedCity } = useContext(Context)
  const isSelected = selectedCity.includes(props.cityName)
  const icon = `https://openweathermap.org/img/wn/${props.icon}@2x.png`


  return (
    <div className='weather-card card'>
      <div className='card-container'>

        <div className='card__location'>
          <span>Weather for </span>
          <span className='card__city'>{ props.cityName }</span>
          <span className='card__country'> ({ props.countryName })</span>
        </div>

        <div className='card__5-day'>
          <Link to={`/weather/${props.cityName}/today+0day`}>
            Weather for 5 days
          </Link>
        </div>

        <div className='card__flex-container'>
          <img className='card__icon' src={icon} alt=""/>
          <div className='card__temp-container'>
            <p className='card__temp'>{ Math.round(props.temp - 273) }°C</p>
            <p className='card__temp-feels-like'>Feels like: { Math.round(props.feelsLike - 273) }°C</p>
          </div>
        </div>

        <p className='card__description'>{ props.weatherDescription }</p>
        <p className='card__wind'>Wind: { props.wind.toFixed(1) }m/s</p>

        <button className='card__btn btn__add' disabled={isSelected} onClick={ () => addCity(props.cityName) }>
          { isSelected ? 'city is selected' : 'select city' }
        </button>

      </div>
    </div>
  )
}


export default WeatherCard;