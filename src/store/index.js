import { configureStore } from '@reduxjs/toolkit'
import themeSlice from "./theme/themeSlice"
import weatherSlice from "./weather/weatherSlice"


export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        theme: themeSlice
    }
})