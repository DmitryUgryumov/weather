import React, { useEffect, useState } from 'react'
import { Link, useParams, useRouteMatch, Switch, Route } from 'react-router-dom'

import { weatherRequestDetail } from '../../api/api'
import WeatherDetailList from '../Weather/WeatherDetailList'

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

const WeatherDetail = () => {
  const [error, setError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [cityInfo, setCityInfo] = useState(null)
  const [fiveDay, setFiveDay] = useState([])
  const { path, url } = useRouteMatch()
  const currentURL = useParams()
  const current = currentURL.cityName

  useEffect(() => {
    weatherRequestDetail(current, setCityInfo, setIsLoaded, setError, setFiveDay)
  }, [])

  if (error) {
    return <div className='error'>
      <p className='error__text'>Error: {`"${current}" ${error}`}</p>
    </div>
  } else if (!isLoaded) {
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className='weather-item weather'>

      <div className='weather__title'>
        <div className='weather__location'>
          <span className='weather__city'>
            {cityInfo.city.name}
          </span>
          <span className='weather__country'>
            ({cityInfo.city.country})
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
                <WeatherDetailList cityInfo={cityInfo} monthNames={monthNames} weatherList={date.weatherList}/>
              </Route>
              )
            )
          }
        </Switch>
      </div>

    </div>
  )
}

export default WeatherDetail