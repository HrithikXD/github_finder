import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
function Navbar({title='Github Finder'}) {
  return (
    <nav className='navbar mb12 shadow-lg text-neutral-conten bg-neutral'>
      <div className="container mx-auto">
        <div className="flex-none px2 mx2">
          <FaGithub className='inline pr-2 text-3xl'/>
          <Link to='/' className='text-lg font-bold'>
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
          <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
    title : PropTypes.string,
}
export default Navbar