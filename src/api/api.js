const apiKey = '60881de5bfadd478bce737c02789308b'

export function weatherRequestHome(cityName, setCityInfo, setIsLoaded, setError) {
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

export function weatherRequestSearch(cityName, setCityInfo, setIsLoaded, setError, setIsRequested) {
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

export function weatherRequestDetail(cityName, setCityInfo, setIsLoaded, setError, setFiveDay) {
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
          .map(date => ({
            month: date[0],
            day: date[1],
            weatherList: json.list
              .filter(weatherItem => weatherItem['dt_txt'].slice(8, 10) === date[1])
          }))
      )
      setIsLoaded(true)
    })
    .catch(err => {
      setError(err)
      setIsLoaded(true)
    })
}