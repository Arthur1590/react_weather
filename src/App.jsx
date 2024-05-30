import Current from "./components/Current/Current"
import Navbar from './components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { getLanLon, weatherSelector } from "./store/weather/weatherSlice"
import { Loader } from "./components/Loader"
import Daily from "./components/Daily/Daily"
import { initTheme } from "./store/theme/themeSlice"

function App() {
  
  const dispatch = useDispatch()
  const { data } = useSelector(weatherSelector)
  const { theme } = useSelector(state => state.theme)
  
  useEffect(() => {
    dispatch(initTheme())
    dispatch(getLanLon('Ташкент'))
  }, [])
  
  const wrapperClass = `wrapper ${theme}`

  return (
    <>
      <div className={wrapperClass}>
        { data ? (
          <div className="container">
            <Navbar/>
            <main className="main">
              <Current/>
              <Daily/>
            </main>
          </div>
        ) : <Loader/> }
        
      </div>
    </>
  )
}

export default App
