import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Watchstemp.css"
import { FaEye, FaWindowClose } from "react-icons/fa";
import { addTowatched } from "../rtk/reducers/Watchedslice";
import { clearMovie, removeFromwatchlist } from "../rtk/reducers/watchSlice";
import {  useEffect, useState } from "react";


function Watchstemp(){
    const dispatch = useDispatch()
    const posts = useSelector(poster => poster)
    const [posters, setPosters] = useState(posts.postSlice)
    useEffect(() => {
        const posters = JSON.parse(localStorage.getItem('watchlist'));
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
                            <img className="img-fluid rounded" src={post.Poster} alt={post.Title} />
                            <div className="inner-card-controls">
                                <FaEye className="ctrl-btn" onClick={() => {
                                        dispatch(addTowatched(post));
                                        dispatch(dispatch(removeFromwatchlist(post)))
                                        }}/>
                                <FaWindowClose className="ctrl-btn" onClick={() => dispatch(removeFromwatchlist(post))}/>
                            </div>
                        </div>
                    </div>
                </Col>
                )
            }))
        }
        </Row>
      </>
    )
}
export default Watchstemp