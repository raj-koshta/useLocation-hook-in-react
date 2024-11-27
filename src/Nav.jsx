import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav_style'>
        <NavLink style={({isActive}) =>({
            color: isActive ? "white" : "black",
            textDecoration : "none"
        })} to='/home'>Home</NavLink>
        <NavLink style={({isActive}) =>({
            color: isActive ? "white" : "black",
            textDecoration : "none"
        })} to='/services'>Services</NavLink>
        <NavLink style={({isActive}) =>({
            color: isActive ? "white" : "black",
            textDecoration : "none"
        })} to='/user/Raj/Koshta'>User</NavLink>
        <NavLink style={({isActive}) =>({
            color: isActive ? "white" : "black",
            textDecoration : "none"
        })} to='/contact_us'>Contact_Us</NavLink>
    </div>
  )
}

export default Nav
