import React, { Fragment, useState } from 'react'
import {HiSearch} from 'react-icons/hi'
import {Routes , Route , NavLink} from 'react-router-dom'
import Movies from './Movies'
import TvShows from './TvShows'
import Trends from './Trends'
import Pricing from './Pricing'


import '../styles/NavBarStyle.css'
function NavBar() {
    const [toggle, setToggle] = useState(true)
return (
    <Fragment>
        <nav className={toggle ? '' : 'navBarColor'}>
            <div className='nav-options'>
                <h1 id={toggle ? '' : 'heading'}>Netflix</h1>
                <NavLink to="" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}} >
                <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
                </NavLink>
                <NavLink to="/TvShows" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}} >
                <span id={toggle ? 'Movies' : 'MoviesLight'}>TVShows</span>
                </NavLink>
                <NavLink to="/trending" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}} >
                <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
                </NavLink>
                <NavLink to="/Pricing" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}} >
                <span id={toggle ? 'Movies' : 'MoviesLight'}>Pricing</span>
                </NavLink>
            </div>
            <div className='input-group'>
            <input type='text' placeholder='Search Whatever You Want'/>
            <HiSearch fontSize={21} color="green" id='search'/>
            <div id='Color-switcher' onClick={()=> setToggle(!toggle)}>
                <div id={toggle ? 'Color-switcher-mover' :  'Color-switcher-moved'}></div>
            </div>
            </div>
            
        </nav>
        <Routes>
            <Route path='Movies'  element={<Movies/>}/>
            <Route path='TvShows' element={<TvShows/>}/>
            <Route path='Trend' element={<Trends/>}/>
            <Route path='Pricing' element={<Pricing/>}/>
        </Routes>
    </Fragment>
)
}

export default NavBar
