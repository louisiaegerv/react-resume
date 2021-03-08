import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Error = () => {
  const { pathname } = useLocation()
  return (
    <div>
      <h3>ERROR: '{pathname}' page doesn't exist</h3>
      <Link to='/'>
        <button className='btn'>Back to home</button>
      </Link>
    </div>
  )
}

export default Error
