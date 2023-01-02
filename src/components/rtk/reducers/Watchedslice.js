// The reason why the local storage is resetting is because you are setting the same value in localStorage each time you are refreshing the page. You need to keep track of the old state and apply the new changes to the old state. You can do this by retrieving the current state from localStorage and then adding the new changes to it.

import { createSlice } from '@reduxjs/toolkit'

let currentState = localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : []

export const Watchedslice = createSlice({
    initialState: currentState, // Set initialState to currentState
    name: "watchedSlice",
    reducers: {
      addTowatched: (state, action) => {
        const findPoster = state.find((poster) => poster === action.payload)
        const storedMovieWatched = state.find((movie)=> movie.Poster === action.payload.Poster) // props.id === props.id in watchlist return this object
        if (findPoster) {
            return 
        }  if(storedMovieWatched) {
           return 
        } else {
          state.push(action.payload)
          localStorage.setItem("watched", JSON.stringify(state))
        }
      },
      removeFromwatched: (state, action) => {
        state = state.filter(poster => poster.Poster !== action.payload.Poster)
        localStorage.setItem("watched", JSON.stringify(state))
        return state;
      }
    },
  })


export const {addTowatched, removeFromwatched} = Watchedslice.actions
export default Watchedslice.reducer