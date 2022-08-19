import React, {useContext} from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
    const [movies] = useContext(MovieContext);
    return (
        <nav>
            <h5>Dinesh</h5>
            <h5>No of Movies: {movies.length}</h5>
        </nav>
    )
}
export default Nav;