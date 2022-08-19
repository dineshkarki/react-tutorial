import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
    const [movies] = useContext(MovieContext);
    return (
        <div>
            {
                movies.map((movie) => (
                    <Movie name={movie.name} price={movie.ticketPrice} id={movie.id}/>
                ))
            }
        </div>
    )
}
export default MovieList;