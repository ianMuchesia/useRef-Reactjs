import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-10 bg-gray-100 py-5 border-b-2 border-gray-300'>
        <Link to='/'><h2>Home</h2></Link>
        <Link to='/input'><h2>input</h2></Link>
        <Link to='/images'><h2>Images</h2></Link>

    </div>
  )
}

export default Navbar