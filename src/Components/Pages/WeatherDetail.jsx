import React, { useEffect, useState } from 'react';
import { Link, useParams, useRouteMatch, Switch, Route } from "react-router-dom";

import WeatherDetailList from "../Weather/WeatherDetailList";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const WeatherDetail = ({ apiKey }) => {
  const [error, setError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [cityInfo, setCityInfo] = useState(null)
  const [fiveDay, setFiveDay] = useState([])
  const { path, url } = useRouteMatch()
  const currentURL = useParams()
  const current = currentURL.cityName

  useEffect(() => {
    weatherRequest(current)
  }, [])

  function weatherRequest(cityName) {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=en&appid=${apiKey}`

    fetch(URL)
      .then(data => {
          return data.ok
            ? data.json()
            : Promise.reject(data.statusText)
        }
      )
      .then(json => {
        setCityInfo(json)
        setFiveDay(
          json.list
            .map(weatherItem => weatherItem['dt_txt']
              .slice(5, 10)
              .split('-'))
            .filter((date, ind, arr) => ind !== 0 ? date[1] !== arr[ind - 1][1] : true)
            .map(date => ({ month: date[0], day: date[1] }))
        )
        setIsLoaded(true)
      })
      .catch(err => {
        setError(err)
        setIsLoaded(true)
      })
  }

  if (error) {
    return <div className='error'>
      <p className='error__text'>Error: {`"${current}" ${error}`}</p>
    </div>
  } else if (!isLoaded) {
    return <div className='loading'>Loading...</div>;
  } else {
    return (
      <div className='weather-item weather'>

        <div className='weather__title'>
          <div className='weather__location'>
            <span className='weather__city'>
              { cityInfo.city.name }
            </span>
            <span className='weather__country'>
             ({ cityInfo.city.country })
          </span>
          </div>
        </div>

        <nav className='nav nav-weather'>
          <ul className='nav__list'>
            {
              fiveDay.map((date, ind) => (
                <li key={date.day} className={window.location.href.includes(`+${ind}`) ? 'nav__item nav__item_active' : 'nav__item'}>
                  <Link className='nav__link'  to={`${url}/today+${ind}day`}>
                    {
                      date.day !== new Date().getDate().toString()
                        ? `${date.day} ${monthNames[date.month - 1]}`
                        : 'Today'
                    }
                  </Link>
                </li>
                )
              )
            }
          </ul>
        </nav>


        <div className='weather__list-container'>
          <Switch>
            {
              fiveDay.map((date, ind) => (
                <Route key={date.day} path={`${path}/today+${ind}day`}>
                  <WeatherDetailList cityInfo={cityInfo} monthNames={monthNames}
                                     weatherList={cityInfo.list.filter(weatherItem => weatherItem['dt_txt'].slice(8, 10) === date.day)}/>
                </Route>
                )
              )
            }
          </Switch>
        </div>

      </div>
    )
  }
}


export default WeatherDetail;