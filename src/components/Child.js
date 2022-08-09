import React from 'react';

const Child = (props) => {
    return (
        <div>
            <h3>Child Component!</h3>
            <p>{props.datafromparenttochild}</p>
        </div>
    )
}
export default Child;