import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	apiKey: '039b963d19151aeffe6055e55a4db41c',
	data: null,
}

export const getLanLon = createAsyncThunk(
	'weatherSlice/getLanLon',
	async (city, { getState, dispatch }) => {
		let { apiKey } = getState().weather
		let res = await axios.get(
			`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}` // Изменение HTTP на HTTPS
		)
		dispatch(getWeather(res.data[0]))
	}
)

export const getWeather = createAsyncThunk(
	'weatherSlice/getWeather',
	async (info, { getState }) => {
		let { lat, lon } = info
		let { apiKey } = getState().weather
		let res = await axios.get(
			`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude={minutely,hourly,alerts}&appid=${apiKey}&units=metric&lang=ru`
		)
		return res.data
	}
)

export const weatherSlice = createSlice({
	name: 'weatherSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getWeather.fulfilled, (state, action) => {
			state.data = action.payload
		})
	},
})

export default weatherSlice.reducer

export const weatherSelector = state => state.weather
