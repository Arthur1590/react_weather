import React, { useState } from 'react'
import s from './Navbar.module.scss'
import { logo, kaplya } from "../../utils/exportImg"
import { useDispatch } from "react-redux"
import { getLanLon } from "../../store/weather/weatherSlice"
import { toggleTheme } from "../../store/theme/themeSlice"

const Navbar = () => {
    
   const [city, setCity] = useState('')
   const dispatch = useDispatch()
   
   const formSubmit = (event) => {
        event.preventDefault()
        if(city.length > 1) {
            dispatch(getLanLon(city))
        }
   }
    
  return (
    <nav className={s.nav}>
        <a href="#" className={s.logo}>
            <img src={logo} alt="" />
            <span className={s.logo__span}>react weather</span>
        </a>
        <div className={s.nav__search}>
            <img src={kaplya} alt="" onClick={() => dispatch(toggleTheme())}/>
            <form onSubmit={(event) => formSubmit(event)}>
                <input 
                    type="text"
                    className={s.nav__search_text}
                    placeholder="Выбрать город"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
            </form>
        </div>
    </nav>
  )
}

export default Navbar