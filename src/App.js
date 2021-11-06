import './index.css';
import { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import SelectedCity from "./Components/Pages/SelectedCity";
import Search from "./Components/Pages/Search";
import Context from "./Components/Context/Context";
import Home from "./Components/Pages/Home";
import WeatherDetail from "./Components/Pages/WeatherDetail";

const apiKey = "60881de5bfadd478bce737c02789308b";

function App() {
  const [selectedCity, setSelectedCity] = useState(localStorage.getItem('selectedCity')
    ? JSON.parse(localStorage.getItem('selectedCity'))
    : [])

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
      <nav className='nav'>
        <ul className='nav__list' >

          <li className='nav__item'>
            <Link className='nav__link' to='/search/city='>
              Search
            </Link>
          </li>

          <li className='nav__item'>
            <Link className='nav__link' to='/selected'>
              Selected
            </Link>
          </li>

        </ul>
      </nav>

      <Context.Provider value={{ addCity, selectedCity }}>
        <Switch>

          <Route exact path='/weather' >
            <Home apiKey={apiKey}/>
          </Route>

          <Route path='/search/:cityName'>
            <Search apiKey={apiKey}/>
          </Route>

          <Route path='/selected'>
            <SelectedCity selectedCity={selectedCity} removeCity={removeCity}/>
          </Route>

          <Route path='/weather/:cityName'>
            <WeatherDetail apiKey={apiKey}/>
          </Route>

        </Switch>
      </Context.Provider>
    </div>
  )
}

export default App;
