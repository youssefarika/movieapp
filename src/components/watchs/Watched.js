import { useEffect } from "react"
import {Container} from "react-bootstrap"
import { useSelector } from "react-redux"
import MovieCards from "../Moviecards"


function Watched(){
    return(
        <Container className="mt-5 w-75">
            <h2 className="pb-4">Movie Watched</h2>
           <MovieCards/>
        </Container>
    )
}

export default Watched