
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux";
import Watchstemp from "./Watchstemp";
import { addTowatchlist } from "../rtk/reducers/watchSlice";


function Watchlist(){
    return(
        <>
            <Container className="mt-5 w-75">
            <h2 className="pb-4">My Watchlist</h2>
                <Watchstemp/>
            </Container>
        </>
    )
}

export default Watchlist