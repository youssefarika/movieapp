import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { FaWindowClose } from "react-icons/fa";
import { removeFromwatched } from "./rtk/reducers/Watchedslice";


function MovieCards(){
    const posts = useSelector(post => post)
    const dispatch = useDispatch()
    const movieWatched = posts.Watchedslice
    const [posters, setPosters] = useState(movieWatched)
    useEffect(() => {
        const posters = JSON.parse(localStorage.getItem('watched'));
        if (posters) {
            setPosters(posters);
        }
      }, [posts]);
    return(
      <>
        <Row>
                 { 
             posters.map((post => {
                 return (
                    <Col lg={3} md={6} sm={8} key={post.id}>
                        <div className="movie-cards">
                            <div className="overlay">
                                <img className="img-fluid rounded" src={post.Poster} alt={post.Year} />
                                <div className="inner-card-controls">
                                    <FaWindowClose className="ctrl-btn" onClick={() => dispatch(removeFromwatched(post))}/>
                                </div>
                            </div>
                        </div>
                     </Col>
                 )
             }))
         }
         </Row>
       </>
    // <h1>hi</h1>
    )
}

export default MovieCards