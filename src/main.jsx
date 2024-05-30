import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './store/index.js'
import { Provider } from 'react-redux'
import './scss/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
  
)
