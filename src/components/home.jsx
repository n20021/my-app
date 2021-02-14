import React from 'react'
import { Link } from 'react-router-dom'

export default function home () {
  return (
    <div className='home'>
      <Link className='home-link' to='/nasaphoto'>
        Astronomy Picture of the Day
      </Link>
    </div>
  )
}
