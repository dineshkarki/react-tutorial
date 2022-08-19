import React, {useState} from "react";

const Movie = ({name, price, id}) => {
    return(
        <div className="movieList">
            <table>
                <tbody>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Movie;