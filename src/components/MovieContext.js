import React, {createContext, useState} from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name:'Vikram',
            ticketPrice:'120 rs',
            id:'001'
        },
        {
            name:'Etharkum Thuninthavan',
            ticketPrice:'120 rs',
            id:'002'
        },
        {
            name:'Beast',
            ticketPrice:'120 rs',
            id:'003'
        }
    ])
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            <h4>Context API</h4>
            {props.children}
        </MovieContext.Provider>
    )
}
