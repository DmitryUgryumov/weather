import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import '../stylessheets/index.css'

import SelectedCity from './Pages/SelectedCity'
import Search from './Pages/Search'
import Context from './Context/Context'
import Home from './Pages/Home'
import WeatherDetail from './Pages/WeatherDetail'
import HeaderNav from "./Header/HeaderNav";

function App() {
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem('selectedCity')
      ? JSON.parse(localStorage.getItem('selectedCity'))
      : []
  )

  useEffect(() => {
    localStorage.setItem('selectedCity', JSON.stringify(selectedCity))
  }, [selectedCity])

  const addCity = cityName => {
    if ( !selectedCity.includes(cityName) ) {
      setSelectedCity( prev => [...prev, cityName] )
    }
  }

  const removeCity = cityName => setSelectedCity( prev => prev.filter(city => city !== cityName) )

  return (
    <div className="App">
      <HeaderNav />
      <Context.Provider value={{ addCity, selectedCity }}>
        <Switch>

          <Route exact path='/weather'>
            <Home />
          </Route>

          <Route path='/search/:cityName'>
            <Search />
          </Route>

          <Route path='/selected'>
            <SelectedCity selectedCity={selectedCity} removeCity={removeCity}/>
          </Route>

          <Route path='/weather-detail/:cityName'>
            <WeatherDetail />
          </Route>

        </Switch>
      </Context.Provider>
    </div>
  )
}

export default App
