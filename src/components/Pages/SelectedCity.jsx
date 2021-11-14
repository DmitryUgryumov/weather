import React from 'react'
import { Link } from 'react-router-dom'

const SelectedCity = ({ selectedCity, removeCity }) => {
  return (
    <div className='selected'>
      {
        selectedCity.length
          ?
          <ul className='selected__ul'>
            {
              selectedCity.map(city =>
                (
                    <li className='selected__li' key={city}>
                      <Link className='selected__link' to={`/search/city=${city}`}>
                        {city}
                      </Link>
                      <button className='btn__remove' onClick={ () => removeCity(city) }>
                        X
                      </button>
                    </li>
                )
              )
            }
          </ul>
          : <p className='selected__empty-value' >No selected cities</p>
      }
    </div>
  );
};

export default SelectedCity