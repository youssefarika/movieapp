// The reason why the local storage is resetting is because you are setting the same value in localStorage each time you are refreshing the page. You need to keep track of the old state and apply the new changes to the old state. You can do this by retrieving the current state from localStorage and then adding the new changes to it.

import { createSlice } from '@reduxjs/toolkit'

let currentState = localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : []


export const postSlice = createSlice({
    initialState: currentState, // Set initialState to currentState
    name: "postSlice",
    reducers: {
        addTowatchlist: (state, action) => {
        const findPoster = state.find((poster) => poster === action.payload)
        if (findPoster) {
          return console.log("poster")  
        } else {
          state.push(action.payload)
          localStorage.setItem("watchlist", JSON.stringify(state))
          // Call FetchWatched function here
        }
      },
      removeFromwatchlist: (state, action) => {
        state = state.filter(poster => poster.Poster !== action.payload.Poster)
        localStorage.setItem("watchlist", JSON.stringify(state))
        return state;
      }
    },
  })

export const {addTowatchlist, clearMovie, removeFromwatchlist} = postSlice.actions
export default postSlice.reducer
