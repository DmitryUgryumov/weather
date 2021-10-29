import React, { useState, useEffect } from 'react';
import WeatherCard from "../Weather/WeatherCard";


const cities = [
  'London',
  'New York',
  'Paris',
  'Moscow',
  'Tokyo',
  'Madrid',
  'Beijing',
  'Dubai',
  'Singapore',
  'Barcelona'
]


const Home = ({ apiKey }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cityInfo, setCityInfo] = useState(null);


  useEffect(() => {
    const randCitiesIndex = Math.floor(Math.random() * cities.length)

    weatherRequest(cities[randCitiesIndex])
  }, [])


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
      })
      .catch(err => {
        setIsLoaded(true)
        setError(err)
      })
  }


  if (error) {
    return (
      <div className='error'>
        <p>Error: {error}</p>
      </div>
    )
  } else if (!isLoaded) {
    return <div className='loading'>Loading...</div>;
  } else {
    return (
      <>
        <div className='home-title' >Weather forecast</div>
        <div className='container'>
          <WeatherCard cityName={cityInfo.name} countryName={cityInfo.sys.country}
                       temp={cityInfo.main.temp} weatherDescription={cityInfo['weather'][0].description}
                       icon={cityInfo['weather'][0].icon} wind={cityInfo.wind.speed} feelsLike={cityInfo.main['feels_like']}
          />
        </div>
      </>
    );
  }
};


export default Home;