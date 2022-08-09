import axios from "axios";
import React, {useState, useEffect} from "react";

const FunctionAPIfetch = () => {
    const [items,setItems] = useState([]);
    const fetchData = async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setItems(response.data);
    }
    useEffect(() => {
        fetchData();
    },[])
    return(
        <div>
            <h3>Get Data using useEffect Concept</h3>
            <p>
                {items.map(item => <div>{item.name}</div>)}
            </p>
        </div>
    )
}
export default FunctionAPIfetch;