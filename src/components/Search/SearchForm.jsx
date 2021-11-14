import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { weatherRequestSearch } from '../../api/api'

const SearchForm = ({ setError, setCityInfo, setIsRequested, setIsLoaded }) => {
  const [inputValue, setInputValue] = useState('')
  const hist = useHistory()
  const currentURL = useParams()
  const current = currentURL.cityName

  useEffect(() => {
    const city = current.replace('city=', '')
    setInputValue(city)

    if (city) {
      weatherRequestSearch(city, setCityInfo, setIsLoaded, setError, setIsRequested)
    } else {
      setError(false)
      setIsRequested(false)
      setCityInfo(null)
    }
  }, [current])

  function searchCity(e) {
    e.preventDefault()

    if (inputValue !== '') {
      hist.push(`/search/city=${inputValue}`)
    }
  }

  return (
    <div className='search'>
      <form className='search__form' onSubmit={searchCity}>
        <input className='search__input' type="text" placeholder='Write city' value={inputValue} onChange={ e => setInputValue(e.target.value) }/>
        <button type='submit' className='search__btn'>
          search
        </button>
      </form>
    </div>
  )
}

export default SearchForm