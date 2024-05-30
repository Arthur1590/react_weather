import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'light'
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        toggleTheme(state,action) {
            const currentTheme = state.theme == 'light' ? 'dark' : 'light'
            state.theme = currentTheme
            localStorage.theme = currentTheme
        },
        initTheme(state) {
            const current = localStorage.theme
            if(current) {
                state.theme = current
            }
        }
    }
})

export const { toggleTheme, initTheme } = themeSlice.actions

export default themeSlice.reducer