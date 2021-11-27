import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNav = () => {
  return (
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
  )
}

export default HeaderNav