import React from 'react';

const WeatherDetailList = ({ weatherList }) => {
  return (
    <ul className='weather__list'>
      {
        weatherList.map(weatherItem =>
          (
            <li  className='weather__list-item' key={ weatherItem.dt }>

              <div className='weather__list-info'>
                { weatherItem['dt_txt'].slice(11, 16) }
              </div>

              <div className='weather__list-info weather__temp'>
                { Math.round(weatherItem.main.temp  - 273) }°C
              </div>

              <div className='weather__list-info'>
                <img src={ `https://openweathermap.org/img/wn/${weatherItem['weather'][0].icon}@2x.png` } alt=""/>
              </div>

              <div className='weather__list-info'>
                { weatherItem['weather'][0].description }
              </div>

              <div className='weather__list-info'>
                Wind: { weatherItem.wind.speed.toFixed(1) }m/s
              </div>

              <div className='weather__list-info'>
                <p>Feels like: { Math.round(weatherItem.main['feels_like']  - 273) }°C</p>
              </div>

            </li>
          )
        )
      }
    </ul>
  )
}

export default WeatherDetailList;