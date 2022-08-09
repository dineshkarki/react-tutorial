import React from "react";

function Header(props) {
    return (
        <div style={{color:'red'}} class="text-center">
            <h3>Header Works!</h3>
            <p>{props.name.toUpperCase()}</p>
            <p>{props.id*2}</p>
        </div>
    )
}
export default Header;