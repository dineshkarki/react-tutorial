import axios from "axios";
import React, {useState, useEffect} from "react";

const FunctionAPIfetch = () => {
    const [items,setItems] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users?q=${query}`);
            setItems(response.data);
        }
        // Fetch Data using query length > 2 (Browser Network tab can see)
        if(query.length === 0 || query.length > 2) fetchData();
    },[query]);
    return(
        <div>
            <h4>Get Data &amp; Search</h4>
            <h5>Function Component</h5>
                <div>
                    <input type="text" placeholder='Search name' onChange={(e) => setQuery(e.target.value)} />
                </div>
            <p>
                {items.filter((item) => item.name.toLowerCase().includes(query)).map(item => <div>{item.name}</div>)}
            </p>
        </div>
    )
}
export default FunctionAPIfetch;