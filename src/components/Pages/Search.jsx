import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import WeatherCard from "../Weather/WeatherCard";
import SearchForm from "../Search/SearchForm";

const Search = ({ apiKey }) => {
  const [error, setError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isRequested, setIsRequested] = useState(false)
  const [cityInfo, setCityInfo] = useState(null)
  const currentURL = useParams()
  const current = currentURL.cityName
  const searchForm = <SearchForm weatherRequest={weatherRequest} error={error} setError={setError}
                                 setIsLoaded={setIsLoaded} isLoaded={isLoaded} setCityInfo={setCityInfo}
                                 setIsRequested={setIsRequested}/>

  function weatherRequest(cityName) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=en&appid=${apiKey}`

    fetch(URL)
      .then(data => {
          return data.ok
            ? data.json()
            : Promise.reject(data.statusText)
        }
      )
      .then(json => {
        setCityInfo(json)
        setIsLoaded(true)
        setError(false)
        setIsRequested(true)
      })
      .catch(err => {
        setIsLoaded(true)
        setError(err)
        setIsRequested(true)
      })
  }

  if (cityInfo || isRequested){
    if (error) {
      return(
        <div className='error'>
          {searchForm}
          <p className='error__text'>Error: {`"${current.replace('city=', '')}" ${error}`}</p>
        </div>
      )
    } else if (!isLoaded) {
      return <div className='loading'>Loading...</div>
    } else {
      return (
        <>
          {searchForm}
          <div className='container'>
            <WeatherCard cityName={cityInfo.name} countryName={cityInfo.sys.country}
                         temp={cityInfo.main.temp} weatherDescription={cityInfo['weather'][0].description}
                         icon={cityInfo['weather'][0].icon} wind={cityInfo.wind.speed} feelsLike={cityInfo.main['feels_like']}
            />
          </div>
        </>
      )
    }
  } else {
    return (
      <div>
        {searchForm}
      </div>
    )
  }
};

export default Search;