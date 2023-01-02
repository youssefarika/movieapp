
import { Button, Col } from "react-bootstrap"
import "./Poster.css"
import { useDispatch, useSelector } from "react-redux"
import { addTowatched } from "./rtk/reducers/Watchedslice";
import { addTowatchlist } from "./rtk/reducers/watchSlice";

function Poster(props){
    const dispatch = useDispatch()
    const posts = useSelector(post => post)
    const watchlist = posts.postSlice
    const watched = posts.Watchedslice
    const storedMovie = watchlist.find((movie)=> movie.Poster === props.Poster) // props.id === props.id in watchlist return this object
    const storedMovieWatched = watched.find((movie)=> movie.Poster === props.Poster)
    const watchlistDisabled = storedMovie ? true : 
          storedMovieWatched ? true : false
    const watchedDisabled = storedMovieWatched ? true : false
    return(
        <>
           <Col>
                <div className="results">
                    <div className="result d-flex">
                            <div className="post">
                                <img className=" img-fluid mt-4 rounded" src={props.Poster} alt={props.Title}/>
                            </div>
                        <div className="info d-flex align-items-start mx-4">
                            <div className="header">
                                <h5 className="mt-4 mx-2">{props.Title}</h5>
                                <h6 className="m-2 ">{props.Year}</h6>
                                <div className="controls mx-1">
                                        <Button className="mx-1" variant="info btn-sm" onClick={() =>  dispatch(addTowatchlist(props))} disabled={watchlistDisabled}>ADD TO WATCHLIST</Button>
                                        <Button className="mx-1" variant="info btn-sm" onClick={() => dispatch(addTowatched(props))} disabled={watchedDisabled}>ADD TO WATCHED</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </Col>
        </>
    )
}

export default Poster

