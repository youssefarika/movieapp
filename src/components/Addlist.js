import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Movietemp from "./Movietemp";
import  "../components/Addlist.css"

// Create a context for the movielist state variable
export const MovielistContext = React.createContext();

function Addlist() {
  const [movie, setMovie] = useState("");
  const [movielist, setMovielist] = useState([]);

  const handleChange = (event) => {
    setMovie(event.target.value);
  };

  const url = `http://www.omdbapi.com/?s=${movie}&apikey=bad4f230`;

  const callmovie = () => {
    axios.get(url).then((res) => {
      const movies = res.data;
      setMovielist({ movies });
    });
  };

  useEffect(() => {
    callmovie();
  }, [movie]);

  return (
    <>
      <MovielistContext.Provider value={movielist}>
        <div className="mt-5 home">
        <input type="text" placeholder="Search for a movie" onChange={handleChange}
              value={movie}/>
          <Movietemp/>
        </div>
      </MovielistContext.Provider>
    </>
  );
}

export default Addlist;
