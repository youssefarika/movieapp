import { useContext, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { MovielistContext } from "./Addlist"
import Poster from "./Poster"
import "./Movietemp.css"

function Movietemp(){
    const movies = useContext(MovielistContext)
    function getMovies(){
        if(movies.movies !== undefined) {
            return movies.movies.Search
        }
    }
    const movieList = getMovies()
    return(
        <>
             {movieList ? movieList.map(movie => <Row key={movie.imdbID}><Poster id={movie.imdbID} Poster ={movie.Poster} Title = {movie.Title} Year = {movie.Year} /></Row>)  : null}
        </>
    )
}

export default Movietemp
